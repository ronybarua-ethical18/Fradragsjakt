import * as path from "path";

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve(
      process.cwd(),
      "src/server/services/mail/templates"
    ), // Corrected path
    defaultLayout: false,
  },
  viewPath: path.resolve(process.cwd(), "src/server/services/mail/templates"), // Corrected path
  extName: ".handlebars",
};

export default handlebarOptions;
