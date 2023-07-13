"use client";
import React, { Component } from 'react';
import client from '../../../sanity/lib/client';
import styles from './style.module.scss';

interface HeaderData {
  siteName: string;
  phoneLink: string;
  phoneNumber: string;
}

export class Header extends Component<{}, HeaderData | null> {
  constructor(props: {}) {
    super(props);
    this.state = null;
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await client.fetch('*[_type == "header"] | order(orderings)');
      this.setState({ ...response[0] });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  render() {
    const { siteName, phoneLink, phoneNumber } = this.state || {};

    return (
      <header className={styles.header}>
        {siteName && (
          <>
            <div className={styles.nameWeb}>{siteName}</div>
            <div className={styles.phone}>
              <a href={`tel:${phoneLink}`}>
                <span>{phoneNumber}</span>
              </a>
            </div>
          </>
        )}
      </header>
    );
  }
}
