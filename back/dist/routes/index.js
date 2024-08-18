"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes_1 = __importDefault(require("./userRoutes"));
const appointmentRoutes_1 = __importDefault(require("./appointmentRoutes"));
const express_1 = require("express");
const indexRouter = (0, express_1.Router)();
// Monta el enrutador userRouter en la ruta '/user'
indexRouter.use("/users", userRoutes_1.default);
// Monta el enrutador appointmentRouter en la ruta '/appointments'
indexRouter.use("/appointments", appointmentRoutes_1.default);
exports.default = indexRouter;
