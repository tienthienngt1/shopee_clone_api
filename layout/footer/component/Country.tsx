import React from "react";
import { WrapCountry } from "../styled";

const Country = () => {
	return (
		<WrapCountry>
			<div>© 2022 Shopee. Tất cả các quyền được bảo lưu.</div>
			<div>
				Quốc gia & Khu vực:{" "}
				<span>
					<a href="https://shopee.sg">Singapore</a>
				</span>{" "}
				|{" "}
				<span>
					<a href="https://shopee.co.id">Indonesia</a>
				</span>{" "}
				|{" "}
				<span>
					<a href="https://shopee.tw">Đài Loan</a>
				</span>{" "}
				|{" "}
				<span>
					<a href="https://shopee.co.th">Thái Lan</a>
				</span>{" "}
				|{" "}
				<span>
					<a href="https://shopee.com.my">Malaysia</a>
				</span>{" "}
				|{" "}
				<span>
					<a href="https://shopee.vn">Việt Nam</a>
				</span>{" "}
				|{" "}
				<span>
					<a href="https://shopee.ph">Philipines</a>
				</span>{" "}
				|{" "}
				<span>
					<a href="https://shopee.com.br">Brazil</a>
				</span>{" "}
				|{" "}
				<span>
					<a href="https://shopee.com.mx">Mexico</a>
				</span>{" "}
				|{" "}
				<span>
					<a href="https://shopee.com.co">Colombia</a>
				</span>{" "}
				|{" "}
				<span>
					<a href="https://shopee.cl">Chile</a>
				</span>{" "}
				|{" "}
				<span>
					<a href="https://shopee.pl">Poland</a>
				</span>
			</div>
		</WrapCountry>
	);
};

export default Country;
