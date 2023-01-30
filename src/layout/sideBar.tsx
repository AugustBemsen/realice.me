import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SideBar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeLink, setActiveLink] = useState<
    "home" | "resume" | "contact" | "projects"
  >("home");

  // set active state based on route
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveLink("home");
        break;
      case "/resume":
        setActiveLink("resume");
        break;
      case "/contact":
        setActiveLink("contact");
        break;
      case "/projects":
        setActiveLink("projects");
        break;

      default:
        setActiveLink("home");
        break;
    }
  }, [location.pathname]);

  return (
    <SideBarStyled>
      <svg
        width={52}
        height={652}
        viewBox="0 0 52 652"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1={27.5}
          y1={61}
          x2={27.5}
          y2={196}
          stroke={activeLink !== "home" ? "#08FDD8" : "#F9F7F5"}
          strokeOpacity={activeLink !== "home" ? 1 : 0.3}
          strokeWidth={3}
        />

        <g onClick={() => navigate("/")}>
          <path
            d="M26 15.975L19.1208 21.2683V28.3601H24.6485V23.163H27.585V28.3601H32.8792V21.2683L26 15.975Z"
            fill="#08FDD8"
            onClick={() => navigate("/")}
          />
          <path
            d="M33.1673 17.1536V13.5276H30.2702V14.9249L26 11.6399L16 19.3328L17.3804 21.1271L26 14.4946L34.6196 21.1272L36 19.3328L33.1673 17.1536Z"
            fill="#08FDD8"
            onClick={() => navigate("/")}
          />
          <rect
            x={7.5}
            y={1.5}
            width={37}
            height={37}
            rx={6.5}
            stroke="#08FDD8"
            strokeWidth={3}
            onClick={() => navigate("/")}
          />
          <path
            d="M19.6255 49.216V55H18.5455V52.472H15.8295V55H14.7495V49.216H15.8295V51.704H18.5455V49.216H19.6255ZM26.4295 52.108C26.4295 52.532 26.3589 52.9253 26.2175 53.288C26.0789 53.648 25.8815 53.96 25.6255 54.224C25.3695 54.488 25.0615 54.6947 24.7015 54.844C24.3415 54.9907 23.9415 55.064 23.5015 55.064C23.0642 55.064 22.6655 54.9907 22.3055 54.844C21.9455 54.6947 21.6362 54.488 21.3775 54.224C21.1215 53.96 20.9229 53.648 20.7815 53.288C20.6402 52.9253 20.5695 52.532 20.5695 52.108C20.5695 51.684 20.6402 51.292 20.7815 50.932C20.9229 50.5693 21.1215 50.256 21.3775 49.992C21.6362 49.728 21.9455 49.5227 22.3055 49.376C22.6655 49.2267 23.0642 49.152 23.5015 49.152C23.7949 49.152 24.0709 49.1867 24.3295 49.256C24.5882 49.3227 24.8255 49.4187 25.0415 49.544C25.2575 49.6667 25.4509 49.8173 25.6215 49.996C25.7949 50.172 25.9415 50.3693 26.0615 50.588C26.1815 50.8067 26.2722 51.044 26.3335 51.3C26.3975 51.556 26.4295 51.8253 26.4295 52.108ZM25.3295 52.108C25.3295 51.7907 25.2869 51.5067 25.2015 51.256C25.1162 51.0027 24.9949 50.788 24.8375 50.612C24.6802 50.436 24.4882 50.3013 24.2615 50.208C24.0375 50.1147 23.7842 50.068 23.5015 50.068C23.2189 50.068 22.9642 50.1147 22.7375 50.208C22.5135 50.3013 22.3215 50.436 22.1615 50.612C22.0042 50.788 21.8829 51.0027 21.7975 51.256C21.7122 51.5067 21.6695 51.7907 21.6695 52.108C21.6695 52.4253 21.7122 52.7107 21.7975 52.964C21.8829 53.2147 22.0042 53.428 22.1615 53.604C22.3215 53.7773 22.5135 53.9107 22.7375 54.004C22.9642 54.0973 23.2189 54.144 23.5015 54.144C23.7842 54.144 24.0375 54.0973 24.2615 54.004C24.4882 53.9107 24.6802 53.7773 24.8375 53.604C24.9949 53.428 25.1162 53.2147 25.2015 52.964C25.2869 52.7107 25.3295 52.4253 25.3295 52.108ZM33.6465 49.216V55H32.6985V51.264C32.6985 51.1147 32.7065 50.9533 32.7225 50.78L30.9745 54.064C30.8918 54.2213 30.7651 54.3 30.5945 54.3H30.4425C30.2718 54.3 30.1451 54.2213 30.0625 54.064L28.2945 50.768C28.3025 50.856 28.3091 50.9427 28.3145 51.028C28.3198 51.1133 28.3225 51.192 28.3225 51.264V55H27.3745V49.216H28.1865C28.2345 49.216 28.2758 49.2173 28.3105 49.22C28.3451 49.2227 28.3758 49.2293 28.4025 49.24C28.4318 49.2507 28.4571 49.268 28.4785 49.292C28.5025 49.316 28.5251 49.348 28.5465 49.388L30.2785 52.6C30.3238 52.6853 30.3651 52.7733 30.4025 52.864C30.4425 52.9547 30.4811 53.048 30.5185 53.144C30.5558 53.0453 30.5945 52.9507 30.6345 52.86C30.6745 52.7667 30.7171 52.6773 30.7625 52.592L32.4705 49.388C32.4918 49.348 32.5145 49.316 32.5385 49.292C32.5625 49.268 32.5878 49.2507 32.6145 49.24C32.6438 49.2293 32.6758 49.2227 32.7105 49.22C32.7451 49.2173 32.7865 49.216 32.8345 49.216H33.6465ZM36.017 50.072V51.676H38.041V52.504H36.017V54.14H38.585V55H34.937V49.216H38.585V50.072H36.017Z"
            fill="#08FDD8"
            onClick={() => navigate("/")}
          />
        </g>

        <line
          x1={27.5}
          y1={259}
          x2={27.5}
          y2={393}
          stroke={
            activeLink === "projects"
              ? "#08FDD8"
              : activeLink === "contact"
              ? "#08FDD8"
              : "#F9F7F5"
          }
          strokeOpacity={
            activeLink === "projects" ? 1 : activeLink === "contact" ? 1 : 0.3
          }
          strokeWidth={3}
        />

        <g onClick={() => navigate("/resume")}>
          <rect
            x={7.5}
            y={197.5}
            width={37}
            height={37}
            rx={6.5}
            stroke={activeLink !== "home" ? "#08FDD8" : "#F9F7F5"}
            strokeOpacity={activeLink !== "home" ? 1 : 0.3}
            strokeWidth={3}
            onClick={() => navigate("/resume")}
          />
          <path
            d="M20 211H16.78C16.41 211 16.04 211.32 16.09 211.84L17.65 221.83C17.65 221.83 19.5 214.47 19.86 212.7C19.97 212.17 20.47 212 20.84 212H26C26 212 25.3 209.92 25.23 209.69C25.11 209.25 24.89 209 24.45 209H21.14C20.78 209 20.44 209.23 20.34 209.64C20.25 210.04 20 211 20 211ZM24.88 211H20.88C20.88 211 21.3 210 21.75 210H23.88C24.36 210 24.88 211 24.88 211ZM18.67 222.25C18.36 222.72 17.91 223 17.41 223H33.14C33.68 223 34.06 222.69 34.17 222.17C34.61 219.98 35.85 213.73 35.85 213.73C35.92 213.23 35.55 213 35.23 213H32V211.53C32 211.37 31.74 211 31.34 211H27.58C27.06 211 26.71 211.58 26.71 211.58L26 213H21.59C21.27 213 20.96 213.19 20.9 213.5C20.9 213.5 19.31 220.2 19.18 220.83C19.11 221.2 18.96 221.82 18.67 222.25ZM31.38 213H27C27 213 27.58 212 28.13 212H30.42C31.13 212 31.38 213 31.38 213Z"
            fill={activeLink !== "home" ? "#08FDD8" : "#F9F7F5"}
            fillOpacity={activeLink !== "home" ? 1 : 0.3}
            onClick={() => navigate("/resume")}
          />

          <path
            d="M11.7233 249.74V252H10.6473V246.216H12.4113C12.806 246.216 13.1433 246.257 13.4233 246.34C13.706 246.42 13.9367 246.533 14.1153 246.68C14.2967 246.827 14.4287 247.003 14.5113 247.208C14.5967 247.411 14.6393 247.635 14.6393 247.88C14.6393 248.075 14.61 248.259 14.5513 248.432C14.4953 248.605 14.4127 248.763 14.3033 248.904C14.1967 249.045 14.0633 249.169 13.9033 249.276C13.746 249.383 13.566 249.468 13.3633 249.532C13.4993 249.609 13.6167 249.72 13.7153 249.864L15.1633 252H14.1953C14.102 252 14.022 251.981 13.9553 251.944C13.8913 251.907 13.8367 251.853 13.7913 251.784L12.5753 249.932C12.53 249.863 12.4793 249.813 12.4233 249.784C12.37 249.755 12.29 249.74 12.1833 249.74H11.7233ZM11.7233 248.968H12.3953C12.598 248.968 12.774 248.943 12.9233 248.892C13.0753 248.841 13.1993 248.772 13.2953 248.684C13.394 248.593 13.4673 248.487 13.5153 248.364C13.5633 248.241 13.5873 248.107 13.5873 247.96C13.5873 247.667 13.49 247.441 13.2953 247.284C13.1033 247.127 12.8087 247.048 12.4113 247.048H11.7233V248.968ZM19.5015 246.216V247.072H16.9375V248.676H18.9575V249.504H16.9375V251.14H19.5015V252H15.8535V246.216H19.5015ZM23.5317 247.268C23.5023 247.327 23.4677 247.368 23.4277 247.392C23.3903 247.416 23.345 247.428 23.2917 247.428C23.2383 247.428 23.1783 247.408 23.1117 247.368C23.045 247.325 22.9663 247.279 22.8757 247.228C22.785 247.177 22.6783 247.132 22.5557 247.092C22.4357 247.049 22.293 247.028 22.1277 247.028C21.9783 247.028 21.8477 247.047 21.7357 247.084C21.6263 247.119 21.533 247.168 21.4557 247.232C21.381 247.296 21.325 247.373 21.2877 247.464C21.2503 247.552 21.2317 247.649 21.2317 247.756C21.2317 247.892 21.269 248.005 21.3437 248.096C21.421 248.187 21.5223 248.264 21.6477 248.328C21.773 248.392 21.9157 248.449 22.0757 248.5C22.2357 248.551 22.3983 248.605 22.5637 248.664C22.7317 248.72 22.8957 248.787 23.0557 248.864C23.2157 248.939 23.3583 249.035 23.4837 249.152C23.609 249.267 23.709 249.408 23.7837 249.576C23.861 249.744 23.8997 249.948 23.8997 250.188C23.8997 250.449 23.8543 250.695 23.7637 250.924C23.6757 251.151 23.545 251.349 23.3717 251.52C23.201 251.688 22.9917 251.821 22.7437 251.92C22.4957 252.016 22.2117 252.064 21.8917 252.064C21.7077 252.064 21.5263 252.045 21.3477 252.008C21.169 251.973 20.997 251.923 20.8317 251.856C20.669 251.789 20.5157 251.709 20.3717 251.616C20.2303 251.523 20.1037 251.419 19.9917 251.304L20.3037 250.788C20.333 250.751 20.3677 250.72 20.4077 250.696C20.4503 250.669 20.497 250.656 20.5477 250.656C20.6143 250.656 20.6863 250.684 20.7637 250.74C20.841 250.793 20.9317 250.853 21.0357 250.92C21.1423 250.987 21.2663 251.048 21.4077 251.104C21.5517 251.157 21.7237 251.184 21.9237 251.184C22.2303 251.184 22.4677 251.112 22.6357 250.968C22.8037 250.821 22.8877 250.612 22.8877 250.34C22.8877 250.188 22.849 250.064 22.7717 249.968C22.697 249.872 22.597 249.792 22.4717 249.728C22.3463 249.661 22.2037 249.605 22.0437 249.56C21.8837 249.515 21.721 249.465 21.5557 249.412C21.3903 249.359 21.2277 249.295 21.0677 249.22C20.9077 249.145 20.765 249.048 20.6397 248.928C20.5143 248.808 20.413 248.659 20.3357 248.48C20.261 248.299 20.2237 248.076 20.2237 247.812C20.2237 247.601 20.265 247.396 20.3477 247.196C20.433 246.996 20.5557 246.819 20.7157 246.664C20.8783 246.509 21.077 246.385 21.3117 246.292C21.5463 246.199 21.8143 246.152 22.1157 246.152C22.457 246.152 22.7717 246.205 23.0597 246.312C23.3477 246.419 23.593 246.568 23.7957 246.76L23.5317 247.268ZM27.0487 251.132C27.2567 251.132 27.4421 251.097 27.6047 251.028C27.7701 250.959 27.9087 250.861 28.0207 250.736C28.1354 250.611 28.2221 250.459 28.2807 250.28C28.3421 250.101 28.3727 249.901 28.3727 249.68V246.216H29.4487V249.68C29.4487 250.024 29.3927 250.343 29.2807 250.636C29.1714 250.927 29.0127 251.179 28.8047 251.392C28.5967 251.603 28.3447 251.768 28.0487 251.888C27.7527 252.005 27.4194 252.064 27.0487 252.064C26.6781 252.064 26.3447 252.005 26.0487 251.888C25.7527 251.768 25.5007 251.603 25.2927 251.392C25.0874 251.179 24.9287 250.927 24.8167 250.636C24.7074 250.343 24.6527 250.024 24.6527 249.68V246.216H25.7287V249.676C25.7287 249.897 25.7581 250.097 25.8167 250.276C25.8781 250.455 25.9647 250.608 26.0767 250.736C26.1887 250.861 26.3261 250.959 26.4887 251.028C26.6541 251.097 26.8407 251.132 27.0487 251.132ZM33.445 249.6C33.4904 249.685 33.5317 249.775 33.569 249.868C33.609 249.959 33.6477 250.051 33.685 250.144C33.7224 250.048 33.761 249.953 33.801 249.86C33.841 249.767 33.8837 249.677 33.929 249.592L35.641 246.388C35.6624 246.348 35.6837 246.316 35.705 246.292C35.729 246.268 35.7544 246.251 35.781 246.24C35.8104 246.229 35.8424 246.223 35.877 246.22C35.9117 246.217 35.953 246.216 36.001 246.216H36.813V252H35.865V248.264C35.865 248.195 35.8664 248.119 35.869 248.036C35.8744 247.953 35.881 247.869 35.889 247.784L34.141 251.064C34.101 251.139 34.049 251.197 33.985 251.24C33.921 251.28 33.8464 251.3 33.761 251.3H33.613C33.5277 251.3 33.453 251.28 33.389 251.24C33.325 251.197 33.273 251.139 33.233 251.064L31.461 247.772C31.4717 247.86 31.4784 247.947 31.481 248.032C31.4864 248.115 31.489 248.192 31.489 248.264V252H30.541V246.216H31.353C31.401 246.216 31.4424 246.217 31.477 246.22C31.5117 246.223 31.5424 246.229 31.569 246.24C31.5984 246.251 31.625 246.268 31.649 246.292C31.673 246.316 31.6957 246.348 31.717 246.388L33.445 249.6ZM41.6265 246.216V247.072H39.0625V248.676H41.0825V249.504H39.0625V251.14H41.6265V252H37.9785V246.216H41.6265Z"
            fill={activeLink !== "home" ? "#08FDD8" : "#F9F7F5"}
            fillOpacity={activeLink !== "home" ? 1 : 0.3}
            onClick={() => navigate("/resume")}
          />
        </g>

        <g onClick={() => navigate("/projects")}>
          <path
            d="M34 417V411H36V417C36 417.53 35.7893 418.039 35.4142 418.414C35.0391 418.789 34.5304 419 34 419H22C21.4696 419 20.9609 418.789 20.5858 418.414C20.2107 418.039 20 417.53 20 417V405C20 403.89 20.89 403 22 403H30V405H22V417H34ZM24.91 408.08L28 411.17L34.59 404.58L36 406L28 414L23.5 409.5L24.91 408.08ZM30 421V423H18C17.4696 423 16.9609 422.789 16.5858 422.414C16.2107 422.039 16 421.53 16 421V408H18V421H30Z"
            fill={
              activeLink === "projects"
                ? "#08FDD8"
                : activeLink === "contact"
                ? "#08FDD8"
                : "#F9F7F5"
            }
            fillOpacity={
              activeLink === "projects"
                ? 1
                : activeLink === "contact"
                ? 1
                : 0.35
            }
            onClick={() => navigate("/projects")}
          />

          <path
            d="M9.71931 444.124C9.91665 444.124 10.0886 444.1 10.2353 444.052C10.382 444.001 10.5033 443.931 10.5993 443.84C10.698 443.747 10.7713 443.635 10.8193 443.504C10.8673 443.371 10.8913 443.223 10.8913 443.06C10.8913 442.905 10.8673 442.765 10.8193 442.64C10.7713 442.515 10.6993 442.408 10.6033 442.32C10.5073 442.232 10.386 442.165 10.2393 442.12C10.0926 442.072 9.91931 442.048 9.71931 442.048H8.91531V444.124H9.71931ZM9.71931 441.216C10.106 441.216 10.4406 441.261 10.7233 441.352C11.006 441.443 11.2393 441.569 11.4233 441.732C11.6073 441.895 11.7433 442.089 11.8313 442.316C11.922 442.543 11.9673 442.791 11.9673 443.06C11.9673 443.34 11.9206 443.597 11.8273 443.832C11.734 444.064 11.594 444.264 11.4073 444.432C11.2206 444.6 10.986 444.731 10.7033 444.824C10.4233 444.917 10.0953 444.964 9.71931 444.964H8.91531V447H7.83931V441.216H9.71931ZM14.5404 443.968C14.7431 443.968 14.9191 443.943 15.0684 443.892C15.2204 443.841 15.3444 443.772 15.4404 443.684C15.5391 443.593 15.6124 443.487 15.6604 443.364C15.7084 443.241 15.7324 443.107 15.7324 442.96C15.7324 442.667 15.6351 442.441 15.4404 442.284C15.2484 442.127 14.9538 442.048 14.5564 442.048H13.8684V443.968H14.5404ZM17.3084 447H16.3364C16.1524 447 16.0191 446.928 15.9364 446.784L14.7204 444.932C14.6751 444.863 14.6244 444.813 14.5684 444.784C14.5151 444.755 14.4351 444.74 14.3284 444.74H13.8684V447H12.7924V441.216H14.5564C14.9484 441.216 15.2844 441.257 15.5644 441.34C15.8471 441.42 16.0778 441.533 16.2564 441.68C16.4378 441.827 16.5711 442.003 16.6564 442.208C16.7418 442.411 16.7844 442.635 16.7844 442.88C16.7844 443.075 16.7551 443.259 16.6964 443.432C16.6404 443.605 16.5578 443.763 16.4484 443.904C16.3418 444.045 16.2084 444.169 16.0484 444.276C15.8911 444.383 15.7111 444.467 15.5084 444.528C15.5778 444.568 15.6418 444.616 15.7004 444.672C15.7591 444.725 15.8124 444.789 15.8604 444.864L17.3084 447ZM23.3709 444.108C23.3709 444.532 23.3003 444.925 23.1589 445.288C23.0203 445.648 22.8229 445.96 22.5669 446.224C22.3109 446.488 22.0029 446.695 21.6429 446.844C21.2829 446.991 20.8829 447.064 20.4429 447.064C20.0056 447.064 19.6069 446.991 19.2469 446.844C18.8869 446.695 18.5776 446.488 18.3189 446.224C18.0629 445.96 17.8643 445.648 17.7229 445.288C17.5816 444.925 17.5109 444.532 17.5109 444.108C17.5109 443.684 17.5816 443.292 17.7229 442.932C17.8643 442.569 18.0629 442.256 18.3189 441.992C18.5776 441.728 18.8869 441.523 19.2469 441.376C19.6069 441.227 20.0056 441.152 20.4429 441.152C20.7363 441.152 21.0123 441.187 21.2709 441.256C21.5296 441.323 21.7669 441.419 21.9829 441.544C22.1989 441.667 22.3923 441.817 22.5629 441.996C22.7363 442.172 22.8829 442.369 23.0029 442.588C23.1229 442.807 23.2136 443.044 23.2749 443.3C23.3389 443.556 23.3709 443.825 23.3709 444.108ZM22.2709 444.108C22.2709 443.791 22.2283 443.507 22.1429 443.256C22.0576 443.003 21.9363 442.788 21.7789 442.612C21.6216 442.436 21.4296 442.301 21.2029 442.208C20.9789 442.115 20.7256 442.068 20.4429 442.068C20.1603 442.068 19.9056 442.115 19.6789 442.208C19.4549 442.301 19.2629 442.436 19.1029 442.612C18.9456 442.788 18.8243 443.003 18.7389 443.256C18.6536 443.507 18.6109 443.791 18.6109 444.108C18.6109 444.425 18.6536 444.711 18.7389 444.964C18.8243 445.215 18.9456 445.428 19.1029 445.604C19.2629 445.777 19.4549 445.911 19.6789 446.004C19.9056 446.097 20.1603 446.144 20.4429 446.144C20.7256 446.144 20.9789 446.097 21.2029 446.004C21.4296 445.911 21.6216 445.777 21.7789 445.604C21.9363 445.428 22.0576 445.215 22.1429 444.964C22.2283 444.711 22.2709 444.425 22.2709 444.108ZM26.2777 444.944C26.2777 445.269 26.2377 445.563 26.1577 445.824C26.0777 446.085 25.9577 446.308 25.7977 446.492C25.6404 446.676 25.443 446.817 25.2057 446.916C24.9684 447.015 24.6924 447.064 24.3777 447.064C24.2337 447.064 24.0924 447.055 23.9537 447.036C23.815 447.02 23.6697 446.993 23.5177 446.956C23.5257 446.849 23.535 446.743 23.5457 446.636C23.5564 446.529 23.5657 446.423 23.5737 446.316C23.5817 446.257 23.6044 446.211 23.6417 446.176C23.6817 446.139 23.7377 446.12 23.8097 446.12C23.855 446.12 23.9137 446.129 23.9857 446.148C24.0604 446.167 24.1537 446.176 24.2657 446.176C24.4177 446.176 24.5524 446.155 24.6697 446.112C24.787 446.067 24.8844 445.996 24.9617 445.9C25.0417 445.804 25.1017 445.68 25.1417 445.528C25.1817 445.373 25.2017 445.187 25.2017 444.968V441.216H26.2777V444.944ZM28.5912 442.072V443.676H30.6152V444.504H28.5912V446.14H31.1592V447H27.5112V441.216H31.1592V442.072H28.5912ZM35.9598 445.636C36.0184 445.636 36.0704 445.659 36.1158 445.704L36.5398 446.164C36.3051 446.455 36.0158 446.677 35.6718 446.832C35.3304 446.987 34.9198 447.064 34.4398 447.064C34.0104 447.064 33.6238 446.991 33.2798 446.844C32.9384 446.697 32.6464 446.493 32.4038 446.232C32.1611 445.971 31.9744 445.659 31.8438 445.296C31.7158 444.933 31.6518 444.537 31.6518 444.108C31.6518 443.673 31.7211 443.276 31.8598 442.916C31.9984 442.553 32.1931 442.241 32.4438 441.98C32.6971 441.719 32.9984 441.516 33.3478 441.372C33.6971 441.225 34.0838 441.152 34.5078 441.152C34.9291 441.152 35.3024 441.221 35.6278 441.36C35.9558 441.499 36.2344 441.68 36.4638 441.904L36.1038 442.404C36.0824 442.436 36.0544 442.464 36.0198 442.488C35.9878 442.512 35.9424 442.524 35.8838 442.524C35.8438 442.524 35.8024 442.513 35.7598 442.492C35.7171 442.468 35.6704 442.44 35.6198 442.408C35.5691 442.373 35.5104 442.336 35.4438 442.296C35.3771 442.256 35.2998 442.22 35.2118 442.188C35.1238 442.153 35.0211 442.125 34.9038 442.104C34.7891 442.08 34.6558 442.068 34.5038 442.068C34.2451 442.068 34.0078 442.115 33.7918 442.208C33.5784 442.299 33.3944 442.432 33.2398 442.608C33.0851 442.781 32.9651 442.995 32.8798 443.248C32.7944 443.499 32.7518 443.785 32.7518 444.108C32.7518 444.433 32.7971 444.723 32.8878 444.976C32.9811 445.229 33.1064 445.443 33.2638 445.616C33.4211 445.789 33.6064 445.923 33.8198 446.016C34.0331 446.107 34.2624 446.152 34.5078 446.152C34.6544 446.152 34.7864 446.144 34.9038 446.128C35.0238 446.112 35.1331 446.087 35.2318 446.052C35.3331 446.017 35.4278 445.973 35.5158 445.92C35.6064 445.864 35.6958 445.796 35.7838 445.716C35.8104 445.692 35.8384 445.673 35.8678 445.66C35.8971 445.644 35.9278 445.636 35.9598 445.636ZM41.3168 442.1H39.5728V447H38.4968V442.1H36.7528V441.216H41.3168V442.1ZM45.1381 442.268C45.1061 442.324 45.0714 442.365 45.0341 442.392C44.9994 442.416 44.9554 442.428 44.9021 442.428C44.8461 442.428 44.7847 442.408 44.7181 442.368C44.6541 442.325 44.5767 442.279 44.4861 442.228C44.3954 442.177 44.2887 442.132 44.1661 442.092C44.0461 442.049 43.9034 442.028 43.7381 442.028C43.5887 442.028 43.4581 442.047 43.3461 442.084C43.2341 442.119 43.1394 442.168 43.0621 442.232C42.9874 442.296 42.9314 442.373 42.8941 442.464C42.8567 442.552 42.8381 442.649 42.8381 442.756C42.8381 442.892 42.8754 443.005 42.9501 443.096C43.0274 443.187 43.1287 443.264 43.2541 443.328C43.3794 443.392 43.5221 443.449 43.6821 443.5C43.8421 443.551 44.0061 443.605 44.1741 443.664C44.3421 443.72 44.5061 443.787 44.6661 443.864C44.8261 443.939 44.9687 444.035 45.0941 444.152C45.2194 444.267 45.3194 444.408 45.3941 444.576C45.4714 444.744 45.5101 444.948 45.5101 445.188C45.5101 445.449 45.4647 445.695 45.3741 445.924C45.2861 446.151 45.1554 446.349 44.9821 446.52C44.8114 446.688 44.6021 446.821 44.3541 446.92C44.1061 447.016 43.8221 447.064 43.5021 447.064C43.3181 447.064 43.1367 447.045 42.9581 447.008C42.7794 446.973 42.6074 446.923 42.4421 446.856C42.2794 446.789 42.1261 446.709 41.9821 446.616C41.8381 446.523 41.7101 446.419 41.5981 446.304L41.9141 445.788C41.9407 445.751 41.9754 445.72 42.0181 445.696C42.0607 445.669 42.1061 445.656 42.1541 445.656C42.2207 445.656 42.2927 445.684 42.3701 445.74C42.4474 445.793 42.5394 445.853 42.6461 445.92C42.7527 445.987 42.8767 446.048 43.0181 446.104C43.1621 446.157 43.3341 446.184 43.5341 446.184C43.8407 446.184 44.0781 446.112 44.2461 445.968C44.4141 445.821 44.4981 445.612 44.4981 445.34C44.4981 445.188 44.4594 445.064 44.3821 444.968C44.3074 444.872 44.2074 444.792 44.0821 444.728C43.9567 444.661 43.8141 444.605 43.6541 444.56C43.4941 444.515 43.3314 444.465 43.1661 444.412C43.0007 444.359 42.8381 444.295 42.6781 444.22C42.5181 444.145 42.3754 444.048 42.2501 443.928C42.1247 443.808 42.0234 443.659 41.9461 443.48C41.8714 443.299 41.8341 443.076 41.8341 442.812C41.8341 442.601 41.8754 442.396 41.9581 442.196C42.0434 441.996 42.1661 441.819 42.3261 441.664C42.4861 441.509 42.6834 441.385 42.9181 441.292C43.1527 441.199 43.4221 441.152 43.7261 441.152C44.0674 441.152 44.3821 441.205 44.6701 441.312C44.9581 441.419 45.2034 441.568 45.4061 441.76L45.1381 442.268Z"
            fill={
              activeLink === "projects"
                ? "#08FDD8"
                : activeLink === "contact"
                ? "#08FDD8"
                : "#F9F7F5"
            }
            fillOpacity={
              activeLink === "projects" ? 1 : activeLink === "contact" ? 1 : 0.3
            }
            onClick={() => navigate("/projects")}
          />
          <rect
            x={7.5}
            y={394.5}
            width={37}
            height={37}
            rx={6.5}
            onClick={() => navigate("/projects")}
            stroke={
              activeLink === "projects"
                ? "#08FDD8"
                : activeLink === "contact"
                ? "#08FDD8"
                : "#F9F7F5"
            }
            strokeOpacity={
              activeLink === "projects"
                ? 1
                : activeLink === "contact"
                ? 1
                : 0.35
            }
            strokeWidth={3}
          />
        </g>

        <line
          x1={27.5}
          y1={459}
          x2={27.5}
          y2={593}
          stroke={activeLink === "contact" ? "#08FDD8" : "#F9F7F5"}
          strokeOpacity={activeLink === "contact" ? 1 : 0.3}
          strokeWidth={3}
        />

        <g onClick={() => navigate("/contact")}>
          <g clipPath="url(#clip0_415_29)" onClick={() => navigate("/contact")}>
            <path
              onClick={() => navigate("/contact")}
              d="M32.6 617.15C33.752 615.795 34.4399 614.089 34.4399 612.236C34.4399 607.824 30.5492 604.25 25.75 604.25C20.9508 604.25 17.0602 607.824 17.0602 612.236C17.0602 616.648 20.9508 620.221 25.75 620.221C26.8066 620.223 27.8559 620.046 28.8531 619.696C28.9098 619.677 28.9711 619.676 29.0282 619.694C29.0852 619.712 29.135 619.748 29.1703 619.796C29.8961 620.777 31.0301 621.466 32.291 621.746C32.3358 621.756 32.3825 621.747 32.4207 621.722C32.4589 621.697 32.4856 621.657 32.4949 621.613C32.5002 621.588 32.4999 621.563 32.4941 621.538C32.4884 621.514 32.4773 621.491 32.4617 621.471C31.9798 620.846 31.7306 620.072 31.7569 619.283C31.7832 618.494 32.0834 617.739 32.6059 617.147L32.6 617.15ZM29.8719 611.297L27.6336 612.996L28.4453 615.686C28.4607 615.736 28.4599 615.79 28.4431 615.84C28.4263 615.89 28.3943 615.934 28.3516 615.965C28.3089 615.996 28.2576 616.013 28.2048 616.013C28.152 616.014 28.1003 615.998 28.0571 615.968L25.75 614.364L23.443 615.969C23.3997 615.999 23.348 616.015 23.2953 616.014C23.2425 616.014 23.1912 615.997 23.1485 615.966C23.1058 615.935 23.0738 615.891 23.0569 615.841C23.04 615.791 23.0391 615.737 23.0543 615.687L23.8664 612.997L21.6281 611.298C21.5861 611.266 21.555 611.222 21.5392 611.172C21.5234 611.121 21.5237 611.067 21.54 611.017C21.5563 610.967 21.5879 610.923 21.6303 610.892C21.6727 610.86 21.7238 610.843 21.7766 610.842L24.5844 610.783L25.5086 608.13C25.5259 608.08 25.5583 608.037 25.6013 608.006C25.6443 607.976 25.6957 607.959 25.7485 607.959C25.8012 607.959 25.8526 607.976 25.8956 608.006C25.9386 608.037 25.971 608.08 25.9883 608.13L26.9125 610.783L29.7203 610.842C29.7734 610.842 29.8249 610.859 29.8678 610.89C29.9107 610.922 29.9428 610.965 29.9595 611.016C29.9762 611.066 29.9767 611.12 29.961 611.171C29.9453 611.222 29.9142 611.266 29.8719 611.298V611.297Z"
              fill={activeLink === "contact" ? "#08FDD8" : "#F9F7F5"}
              fillOpacity={activeLink === "contact" ? 1 : 0.3}
            />
          </g>

          <rect
            x={7.5}
            y={594.5}
            width={37}
            height={37}
            rx={6.5}
            stroke={activeLink === "contact" ? "#08FDD8" : "#F9F7F5"}
            strokeOpacity={activeLink === "contact" ? 1 : 0.35}
            strokeWidth={3}
            onClick={() => navigate("/contact")}
          />
          <path
            d="M4.98578 646.636C5.04445 646.636 5.09511 646.659 5.13778 646.704L5.56178 647.164C5.32711 647.455 5.03778 647.677 4.69378 647.832C4.35245 647.987 3.94178 648.064 3.46178 648.064C3.03245 648.064 2.64578 647.991 2.30178 647.844C1.96045 647.697 1.66845 647.493 1.42578 647.232C1.18311 646.971 0.996448 646.659 0.865781 646.296C0.737781 645.933 0.673781 645.537 0.673781 645.108C0.673781 644.673 0.745781 644.276 0.889781 643.916C1.03378 643.553 1.23645 643.241 1.49778 642.98C1.75911 642.719 2.07111 642.516 2.43378 642.372C2.79911 642.225 3.20178 642.152 3.64178 642.152C4.07111 642.152 4.44578 642.221 4.76578 642.36C5.08845 642.496 5.36445 642.677 5.59378 642.904L5.23378 643.404C5.21245 643.436 5.18445 643.464 5.14978 643.488C5.11778 643.512 5.07245 643.524 5.01378 643.524C4.95245 643.524 4.88978 643.5 4.82578 643.452C4.76178 643.404 4.68045 643.352 4.58178 643.296C4.48311 643.24 4.35778 643.188 4.20578 643.14C4.05645 643.092 3.86578 643.068 3.63378 643.068C3.36178 643.068 3.11111 643.116 2.88178 643.212C2.65511 643.305 2.45911 643.44 2.29378 643.616C2.13111 643.792 2.00311 644.007 1.90978 644.26C1.81911 644.511 1.77378 644.793 1.77378 645.108C1.77378 645.433 1.81911 645.723 1.90978 645.976C2.00311 646.229 2.12845 646.443 2.28578 646.616C2.44311 646.789 2.62845 646.923 2.84178 647.016C3.05511 647.107 3.28445 647.152 3.52978 647.152C3.67645 647.152 3.80845 647.144 3.92578 647.128C4.04578 647.112 4.15511 647.087 4.25378 647.052C4.35511 647.017 4.44978 646.973 4.53778 646.92C4.62845 646.864 4.71778 646.796 4.80578 646.716C4.83245 646.692 4.86045 646.673 4.88978 646.66C4.91911 646.644 4.95111 646.636 4.98578 646.636ZM11.925 645.108C11.925 645.532 11.8543 645.925 11.713 646.288C11.5716 646.648 11.373 646.96 11.117 647.224C10.861 647.488 10.553 647.695 10.193 647.844C9.83297 647.991 9.4343 648.064 8.99697 648.064C8.55964 648.064 8.15964 647.991 7.79697 647.844C7.43697 647.695 7.12764 647.488 6.86897 647.224C6.61297 646.96 6.4143 646.648 6.27297 646.288C6.13164 645.925 6.06097 645.532 6.06097 645.108C6.06097 644.684 6.13164 644.292 6.27297 643.932C6.4143 643.569 6.61297 643.256 6.86897 642.992C7.12764 642.728 7.43697 642.523 7.79697 642.376C8.15964 642.227 8.55964 642.152 8.99697 642.152C9.4343 642.152 9.83297 642.227 10.193 642.376C10.553 642.525 10.861 642.732 11.117 642.996C11.373 643.257 11.5716 643.569 11.713 643.932C11.8543 644.292 11.925 644.684 11.925 645.108ZM10.821 645.108C10.821 644.791 10.7783 644.507 10.693 644.256C10.6103 644.003 10.4903 643.788 10.333 643.612C10.1756 643.436 9.98364 643.301 9.75697 643.208C9.53297 643.115 9.27964 643.068 8.99697 643.068C8.7143 643.068 8.45964 643.115 8.23297 643.208C8.0063 643.301 7.81297 643.436 7.65297 643.612C7.49564 643.788 7.3743 644.003 7.28897 644.256C7.20364 644.507 7.16097 644.791 7.16097 645.108C7.16097 645.425 7.20364 645.711 7.28897 645.964C7.3743 646.215 7.49564 646.428 7.65297 646.604C7.81297 646.777 8.0063 646.911 8.23297 647.004C8.45964 647.097 8.7143 647.144 8.99697 647.144C9.27964 647.144 9.53297 647.097 9.75697 647.004C9.98364 646.911 10.1756 646.777 10.333 646.604C10.4903 646.428 10.6103 646.215 10.693 645.964C10.7783 645.711 10.821 645.425 10.821 645.108ZM13.3394 642.216C13.3874 642.216 13.4274 642.219 13.4594 642.224C13.4914 642.227 13.5194 642.235 13.5434 642.248C13.5701 642.259 13.5954 642.276 13.6194 642.3C13.6434 642.321 13.6701 642.351 13.6994 642.388L16.7354 646.256C16.7247 646.163 16.7167 646.072 16.7114 645.984C16.7087 645.893 16.7074 645.809 16.7074 645.732V642.216H17.6554V648H17.0994C17.0141 648 16.9434 647.987 16.8874 647.96C16.8314 647.933 16.7767 647.885 16.7234 647.816L13.6994 643.964C13.7074 644.049 13.7127 644.135 13.7154 644.22C13.7207 644.303 13.7234 644.379 13.7234 644.448V648H12.7754V642.216H13.3394ZM22.8983 642.216V643.1H21.1583V648H20.0823V643.1H18.3343V642.216H22.8983ZM28.0782 648H27.2462C27.1528 648 27.0755 647.977 27.0142 647.932C26.9555 647.884 26.9128 647.825 26.8862 647.756L26.4542 646.576H24.0582L23.6262 647.756C23.6048 647.817 23.5622 647.873 23.4982 647.924C23.4368 647.975 23.3608 648 23.2702 648H22.4342L24.7062 642.216H25.8062L28.0782 648ZM24.3342 645.816H26.1782L25.4742 643.892C25.4422 643.807 25.4062 643.707 25.3662 643.592C25.3288 643.475 25.2915 643.348 25.2542 643.212C25.2168 643.348 25.1795 643.475 25.1422 643.592C25.1075 643.709 25.0728 643.812 25.0382 643.9L24.3342 645.816ZM32.4467 646.636C32.5054 646.636 32.5561 646.659 32.5987 646.704L33.0227 647.164C32.7881 647.455 32.4987 647.677 32.1547 647.832C31.8134 647.987 31.4027 648.064 30.9227 648.064C30.4934 648.064 30.1067 647.991 29.7627 647.844C29.4214 647.697 29.1294 647.493 28.8867 647.232C28.6441 646.971 28.4574 646.659 28.3267 646.296C28.1987 645.933 28.1347 645.537 28.1347 645.108C28.1347 644.673 28.2067 644.276 28.3507 643.916C28.4947 643.553 28.6974 643.241 28.9587 642.98C29.2201 642.719 29.5321 642.516 29.8947 642.372C30.2601 642.225 30.6627 642.152 31.1027 642.152C31.5321 642.152 31.9067 642.221 32.2267 642.36C32.5494 642.496 32.8254 642.677 33.0547 642.904L32.6947 643.404C32.6734 643.436 32.6454 643.464 32.6107 643.488C32.5787 643.512 32.5334 643.524 32.4747 643.524C32.4134 643.524 32.3507 643.5 32.2867 643.452C32.2227 643.404 32.1414 643.352 32.0427 643.296C31.9441 643.24 31.8187 643.188 31.6667 643.14C31.5174 643.092 31.3267 643.068 31.0947 643.068C30.8227 643.068 30.5721 643.116 30.3427 643.212C30.1161 643.305 29.9201 643.44 29.7547 643.616C29.5921 643.792 29.4641 644.007 29.3707 644.26C29.2801 644.511 29.2347 644.793 29.2347 645.108C29.2347 645.433 29.2801 645.723 29.3707 645.976C29.4641 646.229 29.5894 646.443 29.7467 646.616C29.9041 646.789 30.0894 646.923 30.3027 647.016C30.5161 647.107 30.7454 647.152 30.9907 647.152C31.1374 647.152 31.2694 647.144 31.3867 647.128C31.5067 647.112 31.6161 647.087 31.7147 647.052C31.8161 647.017 31.9107 646.973 31.9987 646.92C32.0894 646.864 32.1787 646.796 32.2667 646.716C32.2934 646.692 32.3214 646.673 32.3507 646.66C32.3801 646.644 32.4121 646.636 32.4467 646.636ZM37.9139 642.216V643.1H36.1739V648H35.0979V643.1H33.3499V642.216H37.9139ZM43.0466 645.6C43.0919 645.685 43.1333 645.775 43.1706 645.868C43.2106 645.959 43.2493 646.051 43.2866 646.144C43.3239 646.048 43.3626 645.953 43.4026 645.86C43.4426 645.767 43.4853 645.677 43.5306 645.592L45.2426 642.388C45.2639 642.348 45.2853 642.316 45.3066 642.292C45.3306 642.268 45.3559 642.251 45.3826 642.24C45.4119 642.229 45.4439 642.223 45.4786 642.22C45.5133 642.217 45.5546 642.216 45.6026 642.216H46.4146V648H45.4666V644.264C45.4666 644.195 45.4679 644.119 45.4706 644.036C45.4759 643.953 45.4826 643.869 45.4906 643.784L43.7426 647.064C43.7026 647.139 43.6506 647.197 43.5866 647.24C43.5226 647.28 43.4479 647.3 43.3626 647.3H43.2146C43.1293 647.3 43.0546 647.28 42.9906 647.24C42.9266 647.197 42.8746 647.139 42.8346 647.064L41.0626 643.772C41.0733 643.86 41.0799 643.947 41.0826 644.032C41.0879 644.115 41.0906 644.192 41.0906 644.264V648H40.1426V642.216H40.9546C41.0026 642.216 41.0439 642.217 41.0786 642.22C41.1133 642.223 41.1439 642.229 41.1706 642.24C41.1999 642.251 41.2266 642.268 41.2506 642.292C41.2746 642.316 41.2973 642.348 41.3186 642.388L43.0466 645.6ZM51.2281 642.216V643.072H48.6641V644.676H50.6841V645.504H48.6641V647.14H51.2281V648H47.5801V642.216H51.2281Z"
            fill={activeLink === "contact" ? "#08FDD8" : "#F9F7F5"}
            fillOpacity={activeLink === "contact" ? 1 : 0.3}
            onClick={() => navigate("/contact")}
          />
        </g>
        <defs>
          <clipPath id="clip0_415_29">
            <rect
              width={17.5}
              height={20}
              fill="white"
              transform="translate(17 603)"
            />
          </clipPath>
        </defs>
      </svg>
    </SideBarStyled>
  );
};

export default SideBar;

const SideBarStyled = styled.div`
  height: 100%;
  svg {
    height: 100%;

    g {
      cursor: pointer;
    }
  }
`;
