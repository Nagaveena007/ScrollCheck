import React from "react";
import styled from "styled-components";
import usePageBottomPercentage from "./usePageBottomPercentage";

import useScrollPosition from "./useScrollPosition";

const MyPage = () => {
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  const reachedBottomPercentage = usePageBottomPercentage();
  const TotalHeightOfTheContent=reachedBottomPercentage+scrollPosition;
  const PageScrolledInPercentage =Math.ceil((scrollPosition/TotalHeightOfTheContent)*100);
  console.log("reachedBottomPercentage",PageScrolledInPercentage);
 
  return (
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum
      laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
      praesentium optio, eaque rerum! Provident similique accusantium nemo
      autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto
      voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit
      sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
      aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
      laudantium molestias eos sapiente officiis modi at sunt excepturi expedita
      sint? Sed quibusdam recusandae alias error harum maxime adipisci amet
      laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
      voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
      fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
      deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
      velit hic maxime doloremque. Quaerat provident commodi consectetur veniam
      similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur
      est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia
      maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non
      architecto ab laudantium modi minima sunt esse temporibus sint culpa,
      recusandae aliquam numquam totam ratione voluptas quod exercitationem
      fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui
      corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      mollitia, molestiae quas vel sint commodi repudiandae consequuntur
      voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat
      iusto fuga praesentium optio, eaque rerum! Provident similique accusantium
      nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
      architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!
      Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum
      debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae
      fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt
      excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime
      adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
      rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum
      ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto
      libero magni deleniti quod quam consequuntur! Commodi minima excepturi
      repudiandae velit hic maxime doloremque. Quaerat provident commodi
      consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic
      voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
      excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
      Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
      temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas
      quod exercitationem fuga. Possimus quis earum veniam quasi aliquam
      eligendi, placeat qui corporis!
    </Description>
  );
};

export default MyPage;

const Description = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.5);
  text-align: justify;
  padding: 0 60px;
`;
