"use client";

import Image from "next/image";
import { Button, Radio } from "antd";
import { AppleOutlined, WindowsOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    document.title = "Snow Shot - 简单优雅的工具软件";
  }, []);

  return (
    <>
      <Head>
        <title>Snow Shot - 简单优雅的工具软件</title>
        <meta name="description" content="简单优雅的工具软件" />
      </Head>

      <div className="container">
        {/* Hero Section */}
        <div className="hero">
          <div className="hero-content">
            <div className="logo-section">
              <Image
                src="/app-icon.png"
                alt="Snow Shot Logo"
                width={83}
                height={83}
                className="logo"
              />
              <h1 className="brand-name">Snow Shot</h1>
            </div>

            <h2 className="hero-title">简单优雅的工具软件</h2>
            <p className="hero-subtitle">功能完备，纯粹的社区驱动</p>

            <div className="cta-buttons">
              <Button
                icon={<WindowsOutlined />}
                onClick={() => {
                  window.open("/setup/Snow Shot_windows-x64.exe", "_blank");
                }}
                color="purple"
                variant="solid"
              >
                Windows 下载
              </Button>
              <Button
                onClick={() => {
                  window.open(
                    "/setup/Snow Shot_windows-x64-portable.exe",
                    "_blank"
                  );
                }}
                color="purple"
                variant="solid"
              >
                Windows 免安装版
              </Button>
            </div>
            <div className="cta-buttons" style={{ marginTop: "16px" }}>
              <Button
                icon={<AppleOutlined />}
                onClick={() => {
                  window.open("/setup/Snow Shot_macos-aarch64.dmg", "_blank");
                }}
                color="purple"
                variant="solid"
              >
                macOS 下载
              </Button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="app-preview">
              <Image
                src="/app-home.png"
                alt="Snow Shot App Preview"
                objectFit="contain"
                width={1536 / 1.8}
                height={948 / 1.8}
                className="app-image"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 Snow Shot</p>
            <a href="https://beian.miit.gov.cn/" target="_blank">
              赣ICP备2021006312号-3
            </a>
          </div>
        </footer>

        <style jsx>{`
          .container {
            min-height: 100vh;
            background: linear-gradient(135deg, #9254de 0%, #722ed1 100%);
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              sans-serif;
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }

          .hero {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            flex: 1;
            width: 100%;
            position: relative;
          }

          .hero-content {
            flex: 1;
            padding-right: 60px;
          }

          .logo-section {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            margin-left: -16px;
          }

          .logo {
            border-radius: 16px;
            margin-right: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          .brand-name {
            font-size: 3rem;
            font-weight: 700;
            margin: 0;
            background: linear-gradient(45deg, #fff, #f0f0f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero-title {
            font-size: 3rem;
            font-weight: 700;
            margin: 0 0 20px 0;
            line-height: 1.2;
            background: linear-gradient(45deg, #fff, #f8f8f8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero-subtitle {
            font-size: 1rem;
            margin-bottom: 24px;
            color: rgba(255, 255, 255, 0.64);
            line-height: 1.6;
          }

          .cta-buttons {
            display: flex;
            gap: 16px;
          }

          .primary-btn {
            background: linear-gradient(45deg, #9254de, #b37feb);
            color: white;
            border: none;
            padding: 16px 32px;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(146, 84, 222, 0.3);
          }

          .primary-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(146, 84, 222, 0.83);
          }

          .secondary-btn {
            background: transparent;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 14px 32px;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .secondary-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
          }

          .hero-visual {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .app-preview {
            position: absolute;
            left: calc(50%);
            top: 0;
            transform-origin: left center;
            opacity: 0.64;
            filter: blur(6px);
            transition: all 0.3s ease;
            height: 100vh;
            display: flex;
            align-items: center;
            width: 100%;
          }

          .app-preview:hover {
            opacity: 1;
            filter: blur(0px);
          }

          .app-preview :global(img) {
            transition: transform 0.3s ease;
            transform-origin: left center;
            transform: scale(2);
            border-radius: 8px;
            box-shadow: 0 0px 0px rgba(0, 0, 0, 0.2);
          }

          .app-preview:hover :global(img) {
            transform: scale(1);
            box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
          }

          .footer {
            padding: 20px;
            text-align: center;
            margin-top: auto;
            font-size: 12px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
          }

          .footer-content {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            gap: 16px;
          }

          .footer-content a {
            color: rgba(255, 255, 255, 0.6);
            margin: 0;
            text-decoration: none;
          }

          .footer p {
            color: rgba(255, 255, 255, 0.6);
            margin: 0;
          }

          @media (max-width: 768px) {
            .hero {
              flex-direction: column;
              text-align: center;
              padding: 60px 20px;
            }

            .hero-content {
              padding-right: 0;
              margin-bottom: 40px;
            }

            .hero-title {
              font-size: 2.5rem;
            }

            .cta-buttons {
              justify-content: center;
            }

            .app-image {
              width: 300px;
              height: auto;
            }
          }
        `}</style>
      </div>
    </>
  );
}
