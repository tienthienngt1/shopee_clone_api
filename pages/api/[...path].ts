import type { NextApiRequest, NextApiResponse } from "next";
import { proxy } from "config/http_proxy_config";

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true,
	},
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	return new Promise((resolve) => {
		req.headers.cookie = "";
		proxy.web(req, res, {
			target: process.env.BASE_API_URL,
			changeOrigin: true,
			selfHandleResponse: false,
		});
		proxy.once("proxyRes", () => {
			resolve(true);
		});
	});
}
