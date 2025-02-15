"use client"
import * as React from "react";
import {motion as m} from "framer-motion"
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Stars: React.FC<React.SVGProps<SVGElement>> = ({className,style}) =>{
    const {theme} = useTheme()
    return   (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 929 929"
        className={cn(className, "lg:size-[929px] size-[500px] md:size-[720px]")}
      >
        <mask
          id="mask0_15_538"
          width="929"
          height="929"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <circle cx="464.5" cy="464.5" r="464.5" fill="#D9D9D9"></circle>
        </mask>
        <g fill={theme === "dark" ? "#D9D9D930" : "#1b263b30"} mask="url(#mask0_15_538)">
          <circle
            cx="510.035"
            cy="250.622"
            r="4.874"
            transform="rotate(-.405 510.035 250.622)"
          ></circle>
          <circle
            cx="23.108"
            cy="450.782"
            r="4.874"
            transform="rotate(35.32 23.108 450.782)"
          ></circle>
          <circle
            cx="32.127"
            cy="54.092"
            r="3.652"
            transform="rotate(35.32 32.127 54.092)"
          ></circle>
          <circle
            cx="471.169"
            cy="114.338"
            r="2.435"
            transform="rotate(-.405 471.169 114.338)"
          ></circle>
          <circle
            cx="525.964"
            cy="334.213"
            r="4.874"
            transform="rotate(35.32 525.964 334.213)"
          ></circle>
          <circle
            cx="151.766"
            cy="346.155"
            r="3.652"
            transform="rotate(-.405 151.766 346.155)"
          ></circle>
          <circle
            cx="417.139"
            cy="359.804"
            r="3.652"
            transform="rotate(35.32 417.139 359.804)"
          ></circle>
          <circle
            cx="254.107"
            cy="377.217"
            r="4.874"
            transform="rotate(-.405 254.107 377.217)"
          ></circle>
          <circle
            cx="61.04"
            cy="89.446"
            r="2.341"
            transform="rotate(162.972 61.04 89.446)"
          ></circle>
          <circle
            cx="284.822"
            cy="231.569"
            r="2.341"
            transform="rotate(-70.123 284.822 231.569)"
          ></circle>
          <circle
            cx="53.878"
            cy="261.709"
            r="3.512"
            transform="rotate(-161.303 53.878 261.709)"
          ></circle>
          <circle
            cx="204.844"
            cy="205.897"
            r="4.686"
            transform="rotate(162.972 204.844 205.897)"
          ></circle>
          <circle
            cx="-0.372"
            cy="306.22"
            r="2.341"
            transform="rotate(-161.303 -.372 306.22)"
          ></circle>
          <circle
            cx="283.733"
            cy="316.939"
            r="2.341"
            transform="rotate(162.972 283.733 316.939)"
          ></circle>
          <circle
            cx="749.337"
            cy="334.868"
            r="3.652"
            transform="rotate(-.405 749.337 334.868)"
          ></circle>
          <circle
            cx="578.52"
            cy="433.47"
            r="2.435"
            transform="rotate(35.32 578.52 433.47)"
          ></circle>
          <circle
            cx="851.679"
            cy="365.93"
            r="4.874"
            transform="rotate(-.405 851.679 365.93)"
          ></circle>
          <circle
            cx="373.771"
            cy="169.4"
            r="3.652"
            transform="rotate(35.32 373.771 169.4)"
          ></circle>
          <circle
            cx="658.613"
            cy="78.159"
            r="2.341"
            transform="rotate(162.972 658.613 78.159)"
          ></circle>
          <circle
            cx="463.572"
            cy="424.561"
            r="3.512"
            transform="rotate(162.972 463.572 424.561)"
          ></circle>
          <circle
            cx="651.45"
            cy="250.422"
            r="3.512"
            transform="rotate(-161.303 651.45 250.422)"
          ></circle>
          <circle
            cx="802.416"
            cy="194.61"
            r="4.686"
            transform="rotate(162.972 802.416 194.61)"
          ></circle>
          <circle
            cx="597.201"
            cy="294.933"
            r="2.341"
            transform="rotate(-161.303 597.201 294.933)"
          ></circle>
          <circle
            cx="355.977"
            cy="422.415"
            r="4.686"
            transform="rotate(162.972 355.977 422.415)"
          ></circle>
          <circle
            cx="394.416"
            cy="67.03"
            r="3.512"
            transform="rotate(-161.303 394.416 67.03)"
          ></circle>
          <circle
            cx="407.446"
            cy="638.29"
            r="2.435"
            transform="rotate(179.595 407.446 638.29)"
          ></circle>
          <circle
            cx="779.822"
            cy="730.152"
            r="2.435"
            transform="rotate(-144.68 779.822 730.152)"
          ></circle>
          <circle
            cx="680.919"
            cy="499.453"
            r="2.435"
            transform="rotate(-89.225 680.919 499.453)"
          ></circle>
          <circle
            cx="574.661"
            cy="845.713"
            r="2.435"
            transform="rotate(-53.5 574.661 845.713)"
          ></circle>
          <circle
            cx="352.651"
            cy="418.415"
            r="4.874"
            transform="rotate(-144.68 352.651 418.415)"
          ></circle>
          <circle
            cx="343.632"
            cy="815.105"
            r="3.652"
            transform="rotate(-144.68 343.632 815.105)"
          ></circle>
          <circle
            cx="506.663"
            cy="797.692"
            r="4.874"
            transform="rotate(179.595 506.663 797.692)"
          ></circle>
          <circle
            cx="276.966"
            cy="846.72"
            r="2.435"
            transform="rotate(-144.68 276.966 846.72)"
          ></circle>
          <circle
            cx="3.807"
            cy="914.26"
            r="4.874"
            transform="rotate(179.595 3.807 914.26)"
          ></circle>
          <circle
            cx="391.915"
            cy="855.628"
            r="3.512"
            transform="rotate(-17.028 391.915 855.628)"
          ></circle>
          <circle
            cx="838.537"
            cy="627.984"
            r="3.512"
            transform="rotate(-17.028 838.537 627.984)"
          ></circle>
          <circle
            cx="650.477"
            cy="801.963"
            r="3.512"
            transform="rotate(18.697 650.477 801.963)"
          ></circle>
          <circle
            cx="223.993"
            cy="523.041"
            r="3.652"
            transform="rotate(179.595 223.993 523.041)"
          ></circle>
          <circle
            cx="121.652"
            cy="491.98"
            r="4.874"
            transform="rotate(179.595 121.652 491.98)"
          ></circle>
          <circle
            cx="314.719"
            cy="779.75"
            r="2.341"
            transform="rotate(-17.028 314.719 779.75)"
          ></circle>
          <circle
            cx="90.937"
            cy="637.628"
            r="2.341"
            transform="rotate(109.877 90.937 637.628)"
          ></circle>
          <circle
            cx="321.881"
            cy="607.487"
            r="3.512"
            transform="rotate(18.697 321.881 607.487)"
          ></circle>
          <circle
            cx="170.915"
            cy="663.3"
            r="4.686"
            transform="rotate(-17.028 170.915 663.3)"
          ></circle>
          <circle
            cx="376.131"
            cy="562.977"
            r="2.341"
            transform="rotate(18.697 376.131 562.977)"
          ></circle>
          <circle
            cx="92.025"
            cy="552.258"
            r="2.341"
            transform="rotate(-17.028 92.025 552.258)"
          ></circle>
          <circle
            cx="499.51"
            cy="857.775"
            r="4.686"
            transform="rotate(-17.028 499.51 857.775)"
          ></circle>
          <circle
            cx="1.988"
            cy="699.797"
            r="3.652"
            transform="rotate(-144.68 1.988 699.797)"
          ></circle>
          <circle
            cx="19.783"
            cy="446.782"
            r="4.686"
            transform="rotate(-17.028 19.783 446.782)"
          ></circle>
          <circle
            cx="513.013"
            cy="602.227"
            r="4.874"
            transform="rotate(179.595 513.013 602.227)"
          ></circle>
          <circle
            cx="497.084"
            cy="518.636"
            r="4.874"
            transform="rotate(-144.68 497.084 518.636)"
          ></circle>
          <circle
            cx="605.91"
            cy="493.045"
            r="3.652"
            transform="rotate(-144.68 605.91 493.045)"
          ></circle>
          <circle
            cx="768.942"
            cy="475.632"
            r="4.874"
            transform="rotate(179.595 768.942 475.632)"
          ></circle>
          <circle
            cx="738.226"
            cy="621.28"
            r="2.341"
            transform="rotate(109.877 738.226 621.28)"
          ></circle>
          <circle
            cx="739.315"
            cy="535.91"
            r="2.341"
            transform="rotate(-17.028 739.315 535.91)"
          ></circle>
          <circle
            cx="444.529"
            cy="419.379"
            r="2.435"
            transform="rotate(-144.68 444.529 419.379)"
          ></circle>
          <circle
            cx="649.277"
            cy="683.449"
            r="3.652"
            transform="rotate(-144.68 649.277 683.449)"
          ></circle>
          <circle
            cx="559.477"
            cy="428.288"
            r="3.512"
            transform="rotate(-17.028 559.477 428.288)"
          ></circle>
          <circle
            cx="425.848"
            cy="557.917"
            r="2.341"
            transform="rotate(18.697 425.848 557.917)"
          ></circle>
          <circle
            cx="667.072"
            cy="430.434"
            r="4.686"
            transform="rotate(-17.028 667.072 430.434)"
          ></circle>
          <circle
            cx="871.052"
            cy="707.192"
            r="2.435"
            transform="rotate(179.595 871.052 707.192)"
          ></circle>
          <circle
            cx="807.239"
            cy="884.008"
            r="3.652"
            transform="rotate(-144.68 807.239 884.008)"
          ></circle>
          <circle
            cx="855.522"
            cy="924.531"
            r="3.512"
            transform="rotate(-17.028 855.522 924.531)"
          ></circle>
          <circle
            cx="778.326"
            cy="848.653"
            r="2.341"
            transform="rotate(-17.028 778.326 848.653)"
          ></circle>
          <circle
            cx="785.488"
            cy="676.39"
            r="3.512"
            transform="rotate(18.697 785.488 676.39)"
          ></circle>
          <circle
            cx="614.425"
            cy="278.753"
            r="3.652"
            transform="rotate(-174.484 614.425 278.753)"
          ></circle>
          <circle
            cx="864.987"
            cy="172.123"
            r="3.652"
            transform="rotate(-138.759 864.987 172.123)"
          ></circle>
          <circle
            cx="800.348"
            cy="63.64"
            r="3.652"
            transform="rotate(-174.484 800.348 63.64)"
          ></circle>
        </g>
      </svg>
      );
}


export default Stars;
