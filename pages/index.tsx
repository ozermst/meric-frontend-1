/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Container } from "reactstrap";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div
          className="flex h-screen w-screen items-center bg-contain bg-right bg-no-repeat"
          style={{
            backgroundImage: "url(" + "/images/meric-hero.jpeg" + ")",
            backgroundColor: "#0A0A0B",
          }}
        >
          <div className="container h-max">
            <h1 className="text-white">Meriç Temur</h1>
            <h3 className="text-white">
              I'm a passionate{" "}
              <span className="underline decoration-teal-400 decoration-2 underline-offset-8">
                athlete
              </span>{" "}
              from İstanbul
            </h3>
            <div>
              <Link href="https://instagram.com/meric.temur?igshid=NjY2NjE5MzQ=">
                <a target="_blank">
                  <i
                    className="bi bi-instagram"
                    style={{ color: "white", fontSize: "2rem" }}
                  ></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
