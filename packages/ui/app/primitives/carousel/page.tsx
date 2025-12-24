"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from "../../../components/primitives";
import styles from "./page.module.css";

export default function CarouselPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Carousel</h1>
        <p className={styles.description}>
          A carousel with motion and swipe built using Embla.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Basic Usage</h2>
        <p className={styles.sectionDescription}>
          A simple carousel with navigation arrows.
        </p>
        <div className={styles.preview}>
          <Carousel className={styles.carousel}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className={styles.cardWrapper}>
                    <Card>
                      <CardContent className={styles.cardContent}>
                        <span className={styles.cardNumber}>{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Multiple Items</h2>
        <p className={styles.sectionDescription}>
          Show multiple items at once using basis classes.
        </p>
        <div className={styles.preview}>
          <Carousel className={styles.carouselWide}>
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className={styles.itemThird}>
                  <div className={styles.cardWrapper}>
                    <Card>
                      <CardContent className={styles.cardContentSmall}>
                        <span className={styles.cardNumber}>{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>With Images</h2>
        <p className={styles.sectionDescription}>
          A carousel displaying images.
        </p>
        <div className={styles.preview}>
          <Carousel className={styles.carousel}>
            <CarouselContent>
              {[
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
                "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
              ].map((src, index) => (
                <CarouselItem key={index}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className={styles.image}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Vertical Orientation</h2>
        <p className={styles.sectionDescription}>
          A vertically oriented carousel.
        </p>
        <div className={styles.preview}>
          <Carousel
            orientation="vertical"
            className={styles.carouselVertical}
            opts={{ align: "start" }}
          >
            <CarouselContent className={styles.carouselContentVertical}>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className={styles.itemVertical}>
                  <div className={styles.cardWrapper}>
                    <Card>
                      <CardContent className={styles.cardContentSmall}>
                        <span className={styles.cardNumber}>{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className={styles.componentsUsed}>
        <h3>Components Used</h3>
        <ul>
          <li>Carousel</li>
          <li>CarouselContent</li>
          <li>CarouselItem</li>
          <li>CarouselPrevious</li>
          <li>CarouselNext</li>
          <li>Card</li>
          <li>CardContent</li>
        </ul>
      </div>
    </div>
  );
}

