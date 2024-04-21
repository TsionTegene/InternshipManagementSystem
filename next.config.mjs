/** @type {import('next').NextConfig} */
import { EventEmitter } from "events";
const nextConfig = {};
EventEmitter.defaultMaxListeners = 50; // Increase the default limit of 10 to 50



export default nextConfig;
