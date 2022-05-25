import "tailwindcss/tailwind.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Tawkto from "tawkto-react";

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		var tawk = new Tawkto("628de703b0d10b6f3e73edb1", "1g3t4stkc");

		tawk.onStatusChange((status) => {
			console.log(status);
		});
	}, []);

	return (
		<div>
			<ToastContainer />
			<Component {...pageProps} />
		</div>
	);
}
export default MyApp;

// TALW SETTINGS

// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/628de703b0d10b6f3e73edb1/1g3t4stkc';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->
