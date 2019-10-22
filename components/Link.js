/**
 * Higher order component, which is based on 'next/link'
 * When app is deployed on github pages repository which is not the main one
 * e.g https://username.github.io/repository/
 * standard 'next/link' is not wokring properly, it doesn't add the 'reporsitory'
 * to url so instead of expected 'https://username.github.io/repository/about',
 * it would be 'https://username.github.io/about/
 * This HOC solves the problem, by adding the prefix (which is defined in next.config.js)
 * to 'as' property
 */
import React from "react";
import NextJsLink from "next/link";

const assetPrefix = process.env.ASSET_PREFIX;

const Link = ({ href, ...rest }) => (
  <NextJsLink href={href} as={`${assetPrefix}${href}`} {...rest} />
);

export default Link;