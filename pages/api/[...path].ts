import type { NextApiRequest, NextApiResponse } from "next";
import { proxy } from "config/http_proxy_config";
import axios from "axios";

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true,
	},
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	if (req.url?.includes("recommend") || req.url?.includes("search")) {
		try {
			const resExtra = await axios.get(
				`${process.env.BASE_API_URL + req.url}`,
				{ headers: { "af-ac-enc-dat": "null" } }
			);
			return res.json({ ...resExtra.data });
		} catch (error) {
			return res.json({ error: "Error Server!" });
		}
	}
	return new Promise((resolve) => {
		proxy.web(req, res, {
			target: process.env.BASE_API_URL,
			autoRewrite: true,
			secure: true,
			changeOrigin: true,
		});
		proxy.once("proxyRes", () => {
			resolve(true);
		});
	});
}
