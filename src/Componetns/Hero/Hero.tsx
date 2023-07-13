"use client";
import React, { Component } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import { Title } from '../Tags/Title/Title';
import { ListItem } from './ListItem/ListItem';
import { LinkProps } from './LinkProps/LinkProps'; // Измененный импорт
import { InfoBlock } from './InfoBlock/InfoBlock';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../../sanity/lib/client';

interface HeroData {
  title: string;
  subtitle: string;
  listItems: string[];
  buttons: {
    buttonLink: string;
    buttonTitle: string;
  }[];
  image: string;
  blockInfo: {
    infoBlockTitle: string;
    infoBlockSubtitle: string;
  }[];
}

export class Hero extends Component<{}, HeroData | null> {
  constructor(props: {}) {
    super(props);
    this.state = null;
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await client.fetch<HeroData[]>('*[_type == "hero"] | order(orderings)');
      this.setState({ ...response[0] });
      this.getImageUrl(response[0].image);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async getImageUrl(image: string) {
    const builder = imageUrlBuilder(client);
    const url = await builder.image(image).url();
    this.setState({ imageUrl: url });
  }

  render() {
    const { title, subtitle, listItems, buttons, blockInfo, imageUrl } = this.state || {};
    const iconUrls = ['/images/Group1.png', '/images/Group2.png'];

    return (
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          {title && (
            <>
              <Title text={title} />
              <h3 className={styles.subheading}>{subtitle}</h3>

              <ListItem items={listItems} listStyle={styles.listStyle} iconUrls={iconUrls} />

              <div className={styles.buttons}>
                {buttons.map((button, index) => (
                  <LinkProps
                    key={index}
                    link={button.buttonLink}
                    title={button.buttonTitle}
                    className={styles.secondButton}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className={styles.heroRight}>
          <div className={styles.circlePurper}></div>
          <div className={styles.circleBlue}></div>

          {imageUrl && (
            <Image src={imageUrl} width={447} height={448} alt="LeftBlockTime" />
          )}

          <div className={styles.blockInfo}>
            {imageUrl && (
              <Image
                src={imageUrl}
                width={53}
                height={53}
                alt="LeftBlockTime"
                className={styles.roundedImage}
              />
            )}

            <div className={styles.informLeft}>
              {blockInfo && blockInfo[0] && (
                <InfoBlock
                  title={blockInfo[0].infoBlockTitle}
                  text={blockInfo[0].infoBlockSubtitle}
                />
              )}
            </div>

            <div className={styles.informRight}>
              {blockInfo && blockInfo[1] && (
                <InfoBlock
                  title={blockInfo[1].infoBlockTitle}
                  text={blockInfo[1].infoBlockSubtitle}
                  className={styles.infoWethCustom}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
