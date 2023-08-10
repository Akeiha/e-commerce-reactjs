export function LogoSVG({ variant }) {
  let backgroundFill = "";
  let leafFill = "";

  if (variant === "header") {
    backgroundFill = "#56B280";
    leafFill = "white";
  }

  if (variant === "footer") {
    backgroundFill = "#ffffff";
    leafFill = "#272727";
  }

  return (
    <div className="logotype">
      <svg
        width="35"
        height="34"
        viewBox="0 0 35 34"
        fill="none"
        data-icon="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_56_82"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="35"
          height="34"
        >
          <circle cx="17.2928" cy="16.9764" r="16.8067" fill={backgroundFill} />
        </mask>
        <g mask="url(#mask0_56_82)">
          <circle cx="17.2928" cy="16.9764" r="16.8067" fill={backgroundFill} />
          <path
            d="M9.5618 33.5395V33.9072H9.92944H25.5183H25.8859V33.5395V26.9985C25.8859 26.3977 25.4097 25.905 24.8093 25.8845L10.7144 25.404C10.0843 25.3825 9.5618 25.8875 9.5618 26.518V33.5395Z"
            fill={leafFill}
            stroke={leafFill}
            strokeWidth="0.735294"
          />
          <g clipPath="url(#clip0_56_82)">
            <path
              d="M12.8 11.9713C16.2251 7.20904 14.7518 3.33272 14.7559 3.32812C14.6833 3.134 14.7818 2.9178 14.976 2.84517C15.0739 2.80854 15.1826 2.81445 15.276 2.86142C21.4577 5.81942 24.1178 9.63792 24.6273 13.0903C24.8298 14.4316 24.7032 15.802 24.2584 17.0836C23.8508 18.2661 23.1719 19.3367 22.2761 20.2096C20.553 21.8737 18.1449 22.6408 15.7682 21.8631C15.1602 21.6647 14.5865 21.3738 14.0674 21.0004C13.026 20.2529 12.236 19.2069 11.802 18.0006C11.3416 16.7106 11.3269 15.3034 11.7605 14.004C11.9999 13.2768 12.3506 12.5911 12.8 11.9713Z"
              fill={leafFill}
            />
            <path
              d="M14.8312 3.45089C14.6807 3.30848 14.674 3.07096 14.8164 2.92043C14.9588 2.76989 15.1964 2.76324 15.3469 2.90565C15.358 2.91613 15.3684 2.92727 15.3781 2.93902C15.3919 2.95144 18.3765 6.07991 18.8028 12.1266L18.8073 12.1833C18.8993 13.5965 18.8539 15.0154 18.6716 16.4198L20.7124 14.8559C20.8834 14.7387 21.1169 14.7822 21.2341 14.9531C21.3402 15.1079 21.3157 15.3172 21.1768 15.4432L18.5097 17.481C17.9126 20.9913 15.8077 25.9574 18.5942 29.0656C18.7284 29.2235 18.7091 29.4604 18.5512 29.5946C18.4009 29.7223 18.1773 29.7118 18.0396 29.5706C14.6982 25.8462 17.1296 21.2324 17.795 17.2425L17.8037 17.1865C18.0743 15.5988 18.167 13.9858 18.0802 12.3776L15.6814 10.62C15.5103 10.503 15.4664 10.2695 15.5833 10.0984C15.7003 9.92729 15.9338 9.88341 16.1049 10.0004C16.112 10.0052 16.1189 10.0103 16.1256 10.0156L17.9843 11.384C17.4045 6.14249 14.8421 3.46346 14.8312 3.45089Z"
              fill={backgroundFill}
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_56_82">
            <rect
              width="20.6274"
              height="20.6274"
              fill={leafFill}
              transform="translate(2.46729 16.6355) rotate(-48)"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="86"
        height="15"
        viewBox="0 0 86 15"
        fill="none"
        data-logo="true"
      >
        <path
          d="M0.432617 8.14871C0.432617 6.87224 0.71401 5.73209 1.2768 4.72826C1.85182 3.71204 2.62871 2.92509 3.60746 2.36741C4.59846 1.79734 5.70568 1.5123 6.92912 1.5123C8.36056 1.5123 9.61459 1.88409 10.6912 2.62766C11.7679 3.37124 12.5203 4.39985 12.9485 5.7135H9.99386C9.70023 5.09385 9.28426 4.62912 8.74594 4.3193C8.21986 4.00947 7.60814 3.85456 6.91077 3.85456C6.16447 3.85456 5.49769 4.03426 4.91044 4.39365C4.33541 4.74066 3.88274 5.23637 3.55241 5.88081C3.23431 6.52524 3.07526 7.28121 3.07526 8.14871C3.07526 9.00382 3.23431 9.75979 3.55241 10.4166C3.88274 11.061 4.33541 11.563 4.91044 11.9224C5.49769 12.2694 6.16447 12.4429 6.91077 12.4429C7.60814 12.4429 8.21986 12.2879 8.74594 11.9781C9.28426 11.6559 9.70023 11.185 9.99386 10.5653H12.9485C12.5203 11.8914 11.7679 12.9262 10.6912 13.6698C9.62683 14.4009 8.37279 14.7665 6.92912 14.7665C5.70568 14.7665 4.59846 14.4877 3.60746 13.93C2.62871 13.3599 1.85182 12.573 1.2768 11.5692C0.71401 10.5653 0.432617 9.42518 0.432617 8.14871Z"
          fill={backgroundFill}
        />
        <path
          d="M14.4823 9.46856C14.4823 8.42755 14.6842 7.50428 15.0879 6.69874C15.5039 5.8932 16.0605 5.27355 16.7579 4.8398C17.4675 4.40605 18.2566 4.18917 19.1253 4.18917C19.8838 4.18917 20.5445 4.34408 21.1073 4.65391C21.6823 4.96373 22.1411 5.35411 22.4836 5.82504V4.35648H25.0712V14.655H22.4836V13.1493C22.1533 13.6326 21.6945 14.0353 21.1073 14.3576C20.5322 14.6674 19.8655 14.8223 19.1069 14.8223C18.2505 14.8223 17.4675 14.5992 16.7579 14.1531C16.0605 13.7069 15.5039 13.0811 15.0879 12.2756C14.6842 11.4576 14.4823 10.522 14.4823 9.46856ZM22.4836 9.50574C22.4836 8.8737 22.3613 8.3346 22.1166 7.88846C21.8719 7.42992 21.5416 7.08292 21.1256 6.84745C20.7096 6.59959 20.2631 6.47567 19.7859 6.47567C19.3088 6.47567 18.8683 6.5934 18.4646 6.82886C18.0609 7.06433 17.7305 7.41133 17.4736 7.86987C17.2289 8.31601 17.1066 8.84891 17.1066 9.46856C17.1066 10.0882 17.2289 10.6335 17.4736 11.1044C17.7305 11.563 18.0609 11.9162 18.4646 12.164C18.8806 12.4119 19.321 12.5358 19.7859 12.5358C20.2631 12.5358 20.7096 12.4181 21.1256 12.1826C21.5416 11.9347 21.8719 11.5877 22.1166 11.1416C22.3613 10.6831 22.4836 10.1378 22.4836 9.50574Z"
          fill={backgroundFill}
        />
        <path
          d="M33.2145 4.20776C34.4257 4.20776 35.4045 4.59814 36.1508 5.37889C36.8971 6.14725 37.2702 7.22544 37.2702 8.61344V14.655H34.701V8.96664C34.701 8.14871 34.4991 7.52287 34.0954 7.08912C33.6917 6.64297 33.1411 6.4199 32.4437 6.4199C31.7341 6.4199 31.1714 6.64297 30.7554 7.08912C30.3516 7.52287 30.1498 8.14871 30.1498 8.96664V14.655H27.5805V4.35648H30.1498V5.63914C30.4923 5.193 30.9267 4.846 31.4527 4.59814C31.9911 4.33789 32.5783 4.20776 33.2145 4.20776Z"
          fill={backgroundFill}
        />
        <path
          d="M39.0528 9.46856C39.0528 8.42755 39.2547 7.50428 39.6584 6.69874C40.0744 5.8932 40.6372 5.27355 41.3468 4.8398C42.0564 4.40605 42.8455 4.18917 43.7141 4.18917C44.3748 4.18917 45.0049 4.33789 45.6044 4.63532C46.2038 4.92035 46.681 5.30453 47.0358 5.78786V0.898851H49.6417V14.655H47.0358V13.1307C46.7177 13.6388 46.2711 14.0477 45.6961 14.3576C45.1211 14.6674 44.4543 14.8223 43.6958 14.8223C42.8394 14.8223 42.0564 14.5992 41.3468 14.1531C40.6372 13.7069 40.0744 13.0811 39.6584 12.2756C39.2547 11.4576 39.0528 10.522 39.0528 9.46856ZM47.0541 9.50574C47.0541 8.8737 46.9318 8.3346 46.6871 7.88846C46.4424 7.42992 46.1121 7.08292 45.6961 6.84745C45.2801 6.59959 44.8336 6.47567 44.3564 6.47567C43.8793 6.47567 43.4389 6.5934 43.0351 6.82886C42.6314 7.06433 42.301 7.41133 42.0441 7.86987C41.7994 8.31601 41.6771 8.84891 41.6771 9.46856C41.6771 10.0882 41.7994 10.6335 42.0441 11.1044C42.301 11.563 42.6314 11.9162 43.0351 12.164C43.4511 12.4119 43.8915 12.5358 44.3564 12.5358C44.8336 12.5358 45.2801 12.4181 45.6961 12.1826C46.1121 11.9347 46.4424 11.5877 46.6871 11.1416C46.9318 10.6831 47.0541 10.1378 47.0541 9.50574Z"
          fill={backgroundFill}
        />
        <path
          d="M54.7203 0.898851V14.655H52.151V0.898851H54.7203Z"
          fill={backgroundFill}
        />
        <path
          d="M66.7098 9.28266C66.7098 9.65445 66.6854 9.98906 66.6364 10.2865H59.204C59.2651 11.0301 59.5221 11.6125 59.9748 12.0339C60.4274 12.4552 60.9841 12.6659 61.6448 12.6659C62.599 12.6659 63.2781 12.2508 63.6818 11.4204H66.4529C66.1593 12.4119 65.5965 13.2298 64.7645 13.8742C63.9326 14.5063 62.911 14.8223 61.6998 14.8223C60.7211 14.8223 59.8402 14.6054 59.0572 14.1717C58.2864 13.7255 57.6808 13.0997 57.2403 12.2941C56.8121 11.4886 56.598 10.5591 56.598 9.50574C56.598 8.43994 56.8121 7.50428 57.2403 6.69874C57.6685 5.8932 58.268 5.27355 59.0388 4.8398C59.8096 4.40605 60.6966 4.18917 61.6998 4.18917C62.6663 4.18917 63.5289 4.39985 64.2874 4.82121C65.0582 5.24257 65.6515 5.84363 66.0675 6.62438C66.4957 7.39274 66.7098 8.27884 66.7098 9.28266ZM64.0488 8.53909C64.0366 7.86987 63.798 7.33697 63.3331 6.9404C62.8682 6.53143 62.2993 6.32695 61.6264 6.32695C60.9902 6.32695 60.4519 6.52524 60.0115 6.92181C59.5832 7.30599 59.3202 7.84508 59.2223 8.53909H64.0488Z"
          fill={backgroundFill}
        />
        <path
          d="M67.9245 9.46856C67.9245 8.42755 68.1264 7.50428 68.5301 6.69874C68.9461 5.8932 69.5027 5.27355 70.2001 4.8398C70.9097 4.40605 71.6988 4.18917 72.5675 4.18917C73.326 4.18917 73.9867 4.34408 74.5494 4.65391C75.1245 4.96373 75.5833 5.35411 75.9258 5.82504V4.35648H78.5134V14.655H75.9258V13.1493C75.5955 13.6326 75.1367 14.0353 74.5494 14.3576C73.9744 14.6674 73.3076 14.8223 72.5491 14.8223C71.6927 14.8223 70.9097 14.5992 70.2001 14.1531C69.5027 13.7069 68.9461 13.0811 68.5301 12.2756C68.1264 11.4576 67.9245 10.522 67.9245 9.46856ZM75.9258 9.50574C75.9258 8.8737 75.8035 8.3346 75.5588 7.88846C75.3141 7.42992 74.9838 7.08292 74.5678 6.84745C74.1518 6.59959 73.7053 6.47567 73.2281 6.47567C72.751 6.47567 72.3105 6.5934 71.9068 6.82886C71.5031 7.06433 71.1727 7.41133 70.9158 7.86987C70.6711 8.31601 70.5488 8.84891 70.5488 9.46856C70.5488 10.0882 70.6711 10.6335 70.9158 11.1044C71.1727 11.563 71.5031 11.9162 71.9068 12.164C72.3228 12.4119 72.7632 12.5358 73.2281 12.5358C73.7053 12.5358 74.1518 12.4181 74.5678 12.1826C74.9838 11.9347 75.3141 11.5877 75.5588 11.1416C75.8035 10.6831 75.9258 10.1378 75.9258 9.50574Z"
          fill={backgroundFill}
        />
        <path
          d="M85.6841 6.49426H83.9039V14.655H81.298V6.49426H80.1418V4.35648H81.298V3.83597C81.298 2.5719 81.6528 1.64243 82.3624 1.04757C83.072 0.452706 84.1425 0.173865 85.574 0.211044V2.40459C84.95 2.3922 84.5157 2.49754 84.271 2.72061C84.0263 2.94368 83.9039 3.34645 83.9039 3.92892V4.35648H85.6841V6.49426Z"
          fill={backgroundFill}
        />
      </svg>
    </div>
  );
}

LogoSVG.defaultProps = {
  variant: "header",
};
