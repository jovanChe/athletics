import * as React from "react";
import { AspectRatio } from "../../../components/primitives";
import styles from "./page.module.css";

export default function AspectRatioPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Aspect Ratio</h1>
        <p className={styles.description}>
          Displays content within a desired ratio.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>16:9 Ratio</h2>
        <p className={styles.sectionDescription}>
          Standard widescreen video ratio.
        </p>
        <div className={styles.preview}>
          <div className={styles.ratioContainer}>
            <AspectRatio ratio={16 / 9}>
              <div className={styles.ratioContent}>
                <span className={styles.ratioLabel}>16:9</span>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>4:3 Ratio</h2>
        <p className={styles.sectionDescription}>
          Traditional TV/monitor ratio.
        </p>
        <div className={styles.preview}>
          <div className={styles.ratioContainer}>
            <AspectRatio ratio={4 / 3}>
              <div className={styles.ratioContent}>
                <span className={styles.ratioLabel}>4:3</span>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>1:1 Ratio (Square)</h2>
        <p className={styles.sectionDescription}>
          Perfect square, common for profile pictures.
        </p>
        <div className={styles.preview}>
          <div className={styles.ratioContainerSmall}>
            <AspectRatio ratio={1}>
              <div className={styles.ratioContent}>
                <span className={styles.ratioLabel}>1:1</span>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>21:9 Ultrawide</h2>
        <p className={styles.sectionDescription}>
          Ultrawide cinema/monitor ratio.
        </p>
        <div className={styles.preview}>
          <div className={styles.ratioContainer}>
            <AspectRatio ratio={21 / 9}>
              <div className={styles.ratioContent}>
                <span className={styles.ratioLabel}>21:9</span>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>With Image</h2>
        <p className={styles.sectionDescription}>
          Aspect ratio with an image that covers the container.
        </p>
        <div className={styles.preview}>
          <div className={styles.ratioContainer}>
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Photo by Drew Beamer"
                className={styles.image}
              />
            </AspectRatio>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Multiple Ratios Grid</h2>
        <p className={styles.sectionDescription}>
          Consistent sizing in a grid layout.
        </p>
        <div className={styles.preview}>
          <div className={styles.grid}>
            <div>
              <AspectRatio ratio={1}>
                <div className={styles.ratioContent}>
                  <span className={styles.ratioLabel}>1:1</span>
                </div>
              </AspectRatio>
            </div>
            <div>
              <AspectRatio ratio={1}>
                <div className={styles.ratioContent}>
                  <span className={styles.ratioLabel}>1:1</span>
                </div>
              </AspectRatio>
            </div>
            <div>
              <AspectRatio ratio={1}>
                <div className={styles.ratioContent}>
                  <span className={styles.ratioLabel}>1:1</span>
                </div>
              </AspectRatio>
            </div>
            <div>
              <AspectRatio ratio={1}>
                <div className={styles.ratioContent}>
                  <span className={styles.ratioLabel}>1:1</span>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.componentsUsed}>
        <h3>Components Used</h3>
        <ul>
          <li>AspectRatio</li>
        </ul>
      </div>
    </div>
  );
}

