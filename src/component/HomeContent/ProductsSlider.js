import styled from "@emotion/styled";
import React, { useMemo, useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProductCard from "./ProductCard";

const StyledBox = styled("div")({
    display: "flex",
    gap: "32px",
    width: "calc(100% )",
    overflowX: "auto",
    scrollbarWidth: 0,
    paddingLeft: "120px",
    paddingRight: "30px",

    "&::-webkit-scrollbar": {
        display: "none",
    },
});

const ProductsSlider = () => {
    const slider = useRef();
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(slider.current?.scrollLeft || 0);

    const options = useMemo(() => [
        {
            id: 1,
            img: "./imgs/bg-1.png",
            name: "365 Signature Hoodie",
            price: "€33.95",
        },
        {
            id: 2,
            img: "./imgs/bg-1-1.png",
            name: "Organic Skinny High Waist Jeans",
            price: "€33.95",
        },
        {
            id: 3,
            img: "./imgs/bg-1-2.png",
            name: "Organic Skinny High Waist Jeans",
            price: "€33.95",
        },
    ]);
    // /**
    //  * @type {import("swiper").SwiperOptions}
    //  */
    // const setting = {
    //     slidesPerView: 2,
    //     spaceBetween: 0,
    //     modules: [Navigation],
    //     className: "mySwiper",
    //     // watchSlidesProgress,
    //     // observer,
    //     // allowTouchMove=false,
    // };

    const mouseDown = (e) => {
        isDown.current = true;
        startX.current = e.pageX - slider.current?.offsetLeft;
        scrollLeft.current = slider.current?.scrollLeft;
        console.log(slider.current?.scrollLeft);
    };

    const mouseLeave = (e) => {
        isDown.current = false;
    };
    const onMouseUp = (e) => {
        isDown.current = false;
    };
    const onMouseMove = (e) => {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - slider.current?.offsetLeft;
        const walk = (x - startX.current) * 3; //scroll-fast
        slider.current.scrollLeft = scrollLeft.current - walk;
    };

    return (
        <StyledBox
            ref={slider}
            onMouseDown={mouseDown}
            onMouseLeave={mouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
        >
            {options.map((item) => (
                <ProductCard
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                />
            ))}
            {/* <Swiper {...setting}>
                {options.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ProductCard
                            img={item.img}
                            name={item.name}
                            price={item.price}
                        />
                    </SwiperSlide>
                ))}
            </Swiper> */}
        </StyledBox>
    );
};

export default ProductsSlider;
