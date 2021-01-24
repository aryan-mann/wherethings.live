import React from "react";
// // import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Link } from "gatsby";

const Wrapper = styled.header`
  ${tw`px-4 py-2 bg-transparent md:py-4`}
`;
const Container = styled.div`
  ${tw`flex max-w-5xl m-auto`}
`;

// // animation: ${ColorAnimation} 8s ease-in-out 0s infinite;
// // const ColorAnimation = keyframes`
// //   0% {
// //     color: white;
// //   }

// //   40% {
// //     color: white;
// //   }

// //   50% {
// //     color: black;
// //   }

// //   90% {
// //     color: black;
// //   }

// //   100% {
// //     color: white;
// //   }
// // `;

const Title = styled.h1`
  ${tw`font-sans text-4xl font-black transition-all sm:text-5xl md:text-6xl lg:text-7xl`}
`;

// export default function ({ ...props }) {
//   return (
//     <Wrapper {...props}>
//       <Container>
//         <Link
//           tw="z-30 px-2 py-4 md:py-8"
//           to={routes?.TopNavigationBar?.Home ?? "/"}
//         >
//           <Title>Where Things Live</Title>
//         </Link>
//       </Container>
//     </Wrapper>
//   );
// }

export default function () {
  return (
    <Wrapper>
      <Container>
        <Link to={"/"}>
          <Title>Where Things Live</Title>
        </Link>
      </Container>
    </Wrapper>
  );
}
