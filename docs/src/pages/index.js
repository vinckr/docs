import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Grid, Box } from '@site/src/components/Grid'
import HeroImage from '../../static/img/logo-docs.svg'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="overflow-hidden bg-gradient-to-br from-gray-200 to-gray-50 dark:from-gray-800 dark:to-gray-900 py-16 mb-16">
      <div className="container relative">
        <div className="z-10 relative w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-2xl lg:text-5xl text-text font-semibold mb-6 dark:text-gray-50">{siteConfig.title}</h1>
          <p className="prose text-lg lg:text-xl text-text dark:text-gray-50">{siteConfig.tagline}</p>
        </div>
        <div className="z-0 absolute hidden lg:block -top-24 -right-24">
          <HeroImage />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      description="Here you'll find documentation, guides, and reference material for monitoring and troubleshooting your systems with Netdata.">
      <HomepageHeader />
      <main className="container">
        <Grid className="mb-16" columns="3">
          <Box 
            to="/docs/get-started/"
            title="Get started"
            cta="Install now"
            image={true}>
            Install the open-source monitoring agent on physical/virtual systems running most Linux distributions (Ubuntu, Debian, CentOS, and more), container platforms (Kubernetes clusters, Docker), and many other operating systems, with no <code>sudo</code> required.
          </Box>
          <Box 
            to="/docs/"
            title="Docs"
            cta="Read the docs"
            image={false}>
            Solution- and action-based docs for Netdata's many features and capabilities. Your table of contents to becoming an expert in using Netdata to monitor and troubleshoot applications and their infrastructure.
          </Box>
          <Box 
            to="/guides/"
            title="Guides"
            cta="Start learning"
            image={false}>
            Thoughtful guides to walk you through collecting the right metrics, monitoring your infrastructure, troubleshooting with Netdata's powerful visualizations, and much more.
          </Box>
        </Grid>
      </main>
    </Layout>
  );
}
