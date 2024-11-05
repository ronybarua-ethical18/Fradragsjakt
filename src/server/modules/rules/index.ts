import RuleModel from '@/server/db/models/rules';
import { protectedProcedure } from '@/server/middlewares/with-auth';
import { router } from '@/server/trpc';
import { JwtPayload } from 'jsonwebtoken';
import { ruleValidation } from './rules.validation';
import { ApiResponse } from '@/server/db/types';
import { z } from 'zod';
// import Category from '@/server/db/models/category';

export const rulesRouter = router({
  getRules: protectedProcedure
    .input(
      z.object({
        page: z.number().default(1),
        limit: z.number().default(10),
      })
    )
    .query(async ({ ctx, input }) => {
      const loggedUser = ctx.user as JwtPayload;

      const { page, limit } = input;
      const skip = (page - 1) * limit;

      const total = await RuleModel.countDocuments({ user: loggedUser?.id });
      const rules = await RuleModel.find({ user: loggedUser?.id })
        .skip(skip)
        .limit(limit);

      return {
        status: 200,
        message: 'Rules fetched successfully',
        data: rules,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      } as ApiResponse<typeof rules>;
    }),

  createRule: protectedProcedure
    .input(ruleValidation.ruleSchema)
    .mutation(async ({ ctx, input }) => {
      const sessionUser = ctx.user as JwtPayload;

      if (!sessionUser || !sessionUser?.email || !sessionUser?.id) {
        throw new Error('You must be logged in to create this rule.');
      }

      // const category = await Category.findOne({name})

      const createRule = await RuleModel.create({
        user: sessionUser?.id,
        ...input,
      });

      return {
        message: 'New Rule created successfully',
        status: 200,
        data: createRule,
      } as ApiResponse<typeof createRule>;
    }),
});
