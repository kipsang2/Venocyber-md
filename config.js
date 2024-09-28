//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "254769322679";
global.sudo = process.env.SUDO || "254769322679";
global.owner = process.env.OWNER_NUMBER || "254769322679";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "VENOCYBER-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VUMjZFNjVPdGluMVcraEVNWjBKTkpDNGs3MkVnUlZHSzkvMVh0U2cxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGtzcU9oRWNTZTZmb0RUUEtZZ3NlR25ZcHhqR2M3WkRJMUpkY3diTk16ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZS0pYU01JOWhBYlorTStrdDB5WmpWcEl6ZW5qcjJxQnh0bTlNYVNYU0VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrcEJtOGlLQWVoclZiNWozaytnMndYa1RIU0xOaGNNSUZXRE45ZFh2eGlRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFIcnhWQlhRaGg1WXlOcG52SU5mY21qSWlUelZmaGpvdnZIWGhaVm9IRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp2a253WGF0dzd5MVd4QlQrc3FpZFdGQ21hS2lwRnVIZ0M0dzN1Ym1Va009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09ZZ3BOKzlRUGJBaTZYOEp2RFpFNVc5Wko3Vi9aY1VZOHhlUzE1NHowYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkdXRzF2bEd6ZmxEYjVjRkg1U29Lc2tXb3hoNThBNzFjNmJHS2N3NnMyQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQzZjl2dXpKYjhPSUQwYU9abUVDanhnUS8wSWVhaWNqRXJzTjcrM1Z3RXN4NXlhUFhhMmtySTkxa2FIQW9SRGh5NVRXNmFWOTllczA3ODE3YTY2RmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IlZ3R0hFZjdmMWp0ZnhoY0lFcVJoVS85T1ZtaDQ4OGU0NzM2Tzg2dkV5NnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImR3QjJjWEhZUTdPRkw2NS03SXpURkEiLCJwaG9uZUlkIjoiYzg3NWIwZDEtN2VkZC00MTQ0LWFhODgtYmFhNmI3YjU2NzQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNSakt3M2VsVG9hWUd4WFFvUTFCOUgvTWNqdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvczV1S3puODQ2cFJMOWZnV2Q3cWZkSlNwK2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0NDQjY4QjYiLCJtZSI6eyJpZCI6IjI1NDc2OTMyMjY3OToxMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUExydDhVQ0VMN3gzcmNHR0JNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUWlJaXBkMHZGUlUyUVNWSGV4aTVVOVhTVTZsV2N6SzBCbjJFaENRVXMyQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUUErY0JTUUgyZ0hxUzNZMnh4N3FSeTVuNVJVWWdOdE9YVXVVbkhaK2E4UGhjKzJLNzd5MFlMeTg0SXFST3BnY0h6N1Z1SGUxNVA4elBPQWlZb0YzQXc9PSIsImRldmljZVNpZ25hdHVyZSI6Im5PUU8wNDdqR1Z6NSthZ003ZjB2NWk2S2oxZjFJTWZ2RHNPNkFVOTFkd0p2OFVEQnozeDliMnp3K3hLa09YR2k4aEN1RHlCdHRYd09VR3RRZzliVmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzY5MzIyNjc5OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVJaUlxWGRMeFVWTmtFbFIzc1l1VlBWMGxPcFZuTXl0QVo5aElRa0ZMTmcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc1MTA3MzF9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in NAROK| enjoy your time| this is DR LAWI",
  author: process.env.PACK_AUTHER || "KIPSANG",
  packname: process.env.PACK_NAME || "Lawi",
  botname: process.env.BOT_NAME || "DR LAWI MD",
  ownername: process.env.OWNER_NAME || "DR LAWI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "LAWI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
