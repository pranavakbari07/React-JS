import React from "react";
import Moviecard from "../Components/Moviecard";
import Minicard from "../Components/Minicard";
import Artist from "../Components/Artist";

export default function Home() {
  let arr = [
    {
      image: "minicard1.jpg",
      title: "Jolly LLB 3",
      disc: "UA16+ | Hindi",
    },
    {
      image: "minicard2.jpg",
      title: "Mirai",
      disc: "UA16+ | Hindi and 1 more",
    },
    {
      image: "minicard3.jpg",
      title: "The Bengal Files",
      disc: "A | Hindi",
    },
    {
      image: "minicard4.jpg",
      title: "Ajey: The Untold Story Of a Yogi",
      disc: "UA1+ | Hindi",
    },
  ];

  let arr1 = [
    {
      image: "cardimg-1.jpg",
      time: "Fri, 26 Sep - Sun, 28 Sep 7:30 PM",
      title: "Dandia Night | Float by Dute Free",
      add: "Float by Dute Free, Noida",
      price: "₹249 onwards",
    },
    {
      image: "cardimg-2.jpg",
      time: "22 Nov | 23 Nov, 3PM",
      title: "Rolling Loud India | Hip-Hop Festival ",
      add: "Loud Park, Kharghar , Mumbai",
      price: "7000 onwards",
    },
    {
      image: "cardimg-3.jpg",
      time: "Sat, 11 Oct, 12 PM",
      title: "Project Tyohar",
      add: "Spara Boutique Restort, Delhi/NCR",
      price: "1050 onwards",
    },
    {
      image: "cardimg-4.jpg",
      time: "Sat, 04 Oct, 5:00 PM",
      title: "Eric Prydz India 2025 | Delhi",
      add: "IG indoor Stadium, Delhi/NCR",
      price: "3200 onwards",
    },
  ];

  let arr2 = [
    {
      image: "minicard1.jpg",
      title: "Jolly LLB 3",
      disc: "UA16+ | Hindi",
    },
    {
      image: "minicard5.jpg",
      title: "Demon Slayer: Kimet",
      disc: "UA16+ | Hindi and 1 more",
    },
    {
      image: "minicard6.jpg",
      title: "The Bengal Filesu no Yaiba...",
      disc: "UA13+ | Japanese and 2...",
    },
    {
      image: "minicard2.jpg",
      title: "Mirai",
      disc: "UA16+ | Hindi and 1 more",
    },
  ];

  let arr3 = [
    {
      image: "cardimg-5.jpg",
      time: "Mon, 22 Sept – Tue, 30 Sept, 6:00 AM",
      title: "Squad Goals: Golf Workshop with ZEN Golf Range &amp; Academy",
      add: "ZEN GOLF Range &amp; Academy, Gurugram",
      price: "₹1400 onwards",
    },
    {
      image: "cardimg-6.jpg",
      time: "Daily, 7:00 AM onwards",
      title: "Paramotoring at SkyThrill",
      add: "SkyThrill Paragliding Gurgaon NCR, Gurugram",
      price: "₹1499 onwards",
    },
    {
      image: "cardimg-7.jpg",
      time: "Mon, 22 Sept – Fri, 10 Oct, 9:00 AM",
      title: "Boulderbox",
      add: "BoulderBox - Climbing Centre, Delhi/NCR",
      price: "₹800  ",
    },
    {
      image: "cardimg-8.jpg",
      time: "Mon, 22 Sept – Mon, 6 Oct, 10:00 AM",
      title: "Yansh Adventure Motorsports | Gurugram",
      add: "Yansh Adventure Motorsports Gurugram, Gurugram",
      price: "₹590 onwards",
    },
  ];

  let arr4 = [
    {
      image: "cardimg-9.jpg",
      time: "Mon, 22 Sept – Tue, 30 Sept, 6:00 AM",
      title: "Squad Goals: Golf Workshop with ZEN Golf Range &amp; Academy",
      add: "ZEN GOLF Range &amp; Academy, Gurugram",
      price: "₹1400 onwards",
    },
    {
      image: "cardimg-10.jpg",
      time: "Daily, 7:00 AM onwards",
      title: "Paramotoring at SkyThrill",
      add: "SkyThrill Paragliding Gurgaon NCR, Gurugram",
      price: "₹1499 onwards",
    },
    {
      image: "cardimg-11.jpg",
      time: "Mon, 22 Sept – Fri, 10 Oct, 9:00 AM",
      title: "Boulderbox",
      add: "BoulderBox - Climbing Centre, Delhi/NCR",
      price: "₹800  ",
    },
    {
      image: "cardimg-12.jpg",
      time: "Mon, 22 Sept – Mon, 6 Oct, 10:00 AM",
      title: "Yansh Adventure Motorsports | Gurugram",
      add: "Yansh Adventure Motorsports Gurugram, Gurugram",
      price: "₹590 onwards",
    },
  ];

  let arr5 = [
    {
      image: "minicard7.jpg",
      title: "Chainsaw Man - The Movie: Reze ",
      disc: "A | Japanese",
    },
  ];

  let arr6 = [
    {
      image: "cardimg-13.jpg",
      time: "Fri, 26 Sep - Sun, 28 Sep 7:30 PM",
      title: "Dandia Night | Float by Dute Free",
      add: "Float by Dute Free, Noida",
      price: "₹249 onwards",
    },
    {
      image: "cardimg-14.jpg",
      time: "22 Nov | 23 Nov, 3PM",
      title: "Rolling Loud India | Hip-Hop Festival ",
      add: "Loud Park, Kharghar , Mumbai",
      price: "7000 onwards",
    },
    {
      image: "cardimg-15.jpg",
      time: "Sat, 11 Oct, 12 PM",
      title: "Project Tyohar",
      add: "Spara Boutique Restort, Delhi/NCR",
      price: "1050 onwards",
    },
    {
      image: "cardimg-16.jpg",
      time: "Sat, 04 Oct, 5:00 PM",
      title: "Eric Prydz India 2025 | Delhi",
      add: "IG indoor Stadium, Delhi/NCR",
      price: "3200 onwards",
    },
  ];

  let arr7 = [
    {
      image: "minicard6.jpg",
      title: "Jolly LLB 3",
      disc: "UA16+ | Hindi",
    },
    {
      image: "minicard8.jpg",
      title: "Mirai",
      disc: "UA16+ | Hindi and 1 more",
    },
    {
      image: "minicard9.jpg",
      title: "The Bengal Files",
      disc: "A | Hindi",
    },
    {
      image: "minicard10.jpg",
      title: "Ajey: The Untold Story Of a Yogi",
      disc: "UA1+ | Hindi",
    },
  ];

  let arr8 = [
    {
      image: "cardimg-17.jpg",
      time: "Fri, 26 Sep - Sun, 28 Sep 7:30 PM",
      title: "Yansh Adventure Motorsports | Gurugram",
      add: "Float by Dute Free, Noida",
      price: "₹249 onwards",
    },
    {
      image: "cardimg-18.jpg",
      time: "22 Nov | 23 Nov, 3PM",
      title: "Rolling Loud India | Hip-Hop Festival ",
      add: "Loud Park, Kharghar , Mumbai",
      price: "7000 onwards",
    },
    {
      image: "cardimg-19.jpg",
      time: "Sat, 11 Oct, 12 PM",
      title: "Project Tyohar",
      add: "Spara Boutique Restort, Delhi/NCR",
      price: "1050 onwards",
    },
    {
      image: "cardimg-20.jpg",
      time: "Sat, 04 Oct, 5:00 PM",
      title: "Eric Prydz India 2025 | Delhi",
      add: "IG indoor Stadium, Delhi/NCR",
      price: "3200 onwards",
    },
  ];

  let arr9 = [
    {
      image: "minicard11.jpg",
      title: "Him",
      disc: "A | English",
    },
  ];

  let arr10 = [
    {
      image: "artist1.jpg",
      name: "Radhika Das",
    },
    {
      image: "artist2.jpg",
      name: "Denzel Curry",
    },
    {
      image: "artist3.jpg",
      name: "Parvaaz",
    },
    {
      image: "artist4.jpg",
      name: "Don Toliver",
    },
    {
      image: "artist5.jpg",
      name: "Kutle Khan",
    },
    {
      image: "artist6.jpg",
      name: "Raj Gadhvi",
    }
  ];

  let arr11 = [
    {
      image: "minicard12.jpg",
      title: "Chalo jeete Hain (2018)",
      disc: "U | Hindi",
    },
  ];

  let arr12 = [
    {
      image: "cardimg-21.jpg",
      time: "Fri, 26 Sep - Sun, 28 Sep 7:30 PM",
      title: "Dandia Night | Float by Dute Free",
      add: "Float by Dute Free, Noida",
      price: "₹249 onwards",
    },
    {
      image: "cardimg-22.jpg",
      time: "22 Nov | 23 Nov, 3PM",
      title: "Rolling Loud India | Hip-Hop Festival ",
      add: "Loud Park, Kharghar , Mumbai",
      price: "7000 onwards",
    },
    {
      image: "cardimg-23.jpg",
      time: "Sat, 11 Oct, 12 PM",
      title: "Project Tyohar",
      add: "Spara Boutique Restort, Delhi/NCR",
      price: "1050 onwards",
    },
  ];

  return (
    <>
      <div className="week pt-30 px-30">
        <h1 className="text-2xl font-semibold pb-7">
          Top Hindi movies near you
        </h1>
      </div>

      <div className="flex ml-30 gap-4">
        {arr.map((e, i) => {
          return <Minicard obj={e} />;
        })}
      </div>

      <div className="pt-15 px-30">
        <h1 className="text-2xl font-semibold pb-7">
          Discover the best of Music Events
        </h1>
      </div>

      <div className="flex justify-center gap-4.5">
        {arr1.map((e, i) => {
          return <Moviecard obj={e} />;
        })}
      </div>

      <div className="pt-12 px-30">
        <h1 className="text-2xl font-semibold pb-7">
          Hits from previous weeks
        </h1>
      </div>

      <div className="flex ml-30 gap-4">
        {arr2.map((e, i) => {
          return <Minicard obj={e} />;
        })}
      </div>

      <div className="pt-15 px-30">
        <h1 className="text-2xl font-semibold pb-7">Happening this week</h1>
      </div>

      <div className="flex ml-30 gap-4">
        {arr3.map((e, i) => {
          return <Moviecard obj={e} />;
        })}
      </div>

      <div className="pt-15 px-30">
        <h1 className="text-2xl font-semibold pb-7">Best in Comedy</h1>
      </div>

      <div className="flex ml-30 gap-4">
        {arr4.map((e, i) => {
          return <Moviecard obj={e} />;
        })}
      </div>

      <div className="pt-12 px-30">
        <h1 className="text-2xl font-semibold pb-7">Premiering this week</h1>
      </div>

      <div className="flex ml-30 gap-4">
        {arr5.map((e, i) => {
          return <Minicard obj={e} />;
        })}
      </div>

      <div className="pt-15 px-30">
        <h1 className="text-2xl font-semibold pb-7">India’s Top Events</h1>
      </div>

      <div className="flex ml-30 gap-4">
        {arr6.map((e, i) => {
          return <Moviecard obj={e} />;
        })}
      </div>

      <div className="pt-12 px-30">
        <h1 className="text-2xl font-semibold pb-7">Best of English movies</h1>
      </div>

      <div className="flex ml-30 gap-4">
        {arr7.map((e, i) => {
          return <Minicard obj={e} />;
        })}
      </div>

      <div className="pt-12 px-30">
        <h1 className="text-2xl font-semibold pb-7">Best of English movies</h1>
      </div>

      <div className="flex ml-30 gap-4">
        {arr8.map((e, i) => {
          return <Moviecard obj={e} />;
        })}
      </div>

      <div className="pt-12 px-30">
        <h1 className="text-2xl font-semibold pb-7">Experience in 4DX</h1>
      </div>

      <div className="flex ml-30 gap-4">
        {arr9.map((e, i) => {
          return <Minicard obj={e} />;
        })}
      </div>

      <div className="pt-12 px-30">
        <h1 className="text-2xl font-semibold pb-7">Artists in your District</h1>
      </div>

      <div className="flex ml-30 gap-4">
        {arr10.map((e, i) => {
          return <Artist obj={e} />;
        })}
      </div>

      <div className="pt-12 px-30">
        <h1 className="text-2xl font-semibold pb-7">Timeless Hits</h1>
      </div>

      <div className="flex ml-30 gap-4">
        {arr11.map((e, i) => {
          return <Minicard obj={e} />;
        })}
      </div>

      <div className="pt-12 px-30">
        <h1 className="text-2xl font-semibold pb-7">Sports Mania</h1>
      </div>

      <div className="flex ml-30 gap-4">
        {arr12.map((e, i) => {
          return <Moviecard obj={e} />;
        })}
      </div>
    </>
  );
}
