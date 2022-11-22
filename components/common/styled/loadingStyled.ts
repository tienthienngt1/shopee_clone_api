import styled from "styled-components";

export const WrapLoadingStyled = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5rem;
	.balls {
		width: 3.5em;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
	}

	.balls div {
		width: 0.8em;
		height: 0.8em;
		border-radius: 50%;
		background-color: #fc5a32;
		transform: translateY(-100%);
		animation: wave 0.8s ease-in-out alternate infinite;
	}

	.balls div:nth-of-type(1) {
		animation-delay: -0.4s;
	}

	.balls div:nth-of-type(2) {
		animation-delay: -0.2s;
	}

	@keyframes wave {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(100%);
		}
	}
`;
