"use client";
import imageUrlBuilder from '@sanity/image-url';
import React, { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
import styles from './style.module.scss';
import { Title } from '../Tags/Title/Title';
import { ListItem } from './ListItem/ListItem';
import { Button } from './Button/Button';
import { InfoBlock } from './InfoBlock/InfoBlock';
import Image from 'next/image';

export const Hero = () => {
    const [dataHero, setHeroData] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await client.fetch('*[_type == "hero"] | order(orderings)');
                setHeroData(response[0]);
                getImageUrl(response[0].image);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, []);

    const getImageUrl = (image) => {
        const builder = imageUrlBuilder(client);
        setImageUrl(builder.image(image).url());
    };

    const iconUrls = ['/images/Group1.png', '/images/Group2.png'];

    return (
        <div className={styles.hero}>
            <div className={styles.heroLeft}>
                {dataHero && (
                    <>
                        <Title text={dataHero.title} />
                        <h3 className={styles.subheading}>{dataHero.subtitle}</h3>
                        
                        <ListItem items={dataHero.listItems} listStyle={styles.listStyle} iconUrls={iconUrls} /> 

                        <div className={styles.buttons}>
                            {dataHero.buttons.map((button, index) => (
                                <Button
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
                        {dataHero && dataHero.blockInfo && (
                            <InfoBlock
                                title={dataHero.blockInfo[0].infoBlockTitle}
                                text={dataHero.blockInfo[0].infoBlockSubtitle}
                            />
                        )}
                    </div>

                    <div className={styles.informRight}>
                        {dataHero && dataHero.blockInfo && (
                            <InfoBlock
                                title={dataHero.blockInfo[1].infoBlockTitle}
                                text={dataHero.blockInfo[1].infoBlockSubtitle}
                                className={styles.infoWethCustom}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
