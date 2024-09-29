"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  modal,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";
import { Facebook, Instagram } from "lucide-react";

export default function Home() {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const [modalData, setModalData] = React.useState("");
  const [modalHeading, setModalHeading] = React.useState("");
  const [subHeading, setSubHeading] = React.useState("");
  const [modalType, setModalType] = React.useState("textModal");
  const [modalImage, setModalImage] = React.useState("");
  return (
    <main suppressHydrationWarning className="text-foreground bg-black">
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="text-black"
        size="5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-4xl">
                {modalType !== "imageModal" ? modalHeading : null}
              </ModalHeader>
              <ModalBody>
                {modalType === "textModal" ? (
                  <p className="text-xl rounded-xl shadow">{modalData}</p>
                ) : (
                  <div className="flex text-black">
                    <Image
                      src={`/${modalImage}`}
                      height={500}
                      width={1000}
                      alt=""
                      className="rounded-xl"
                    />
                    <div className="flex flex-col p-5">
                      <p className="text-8xl">{modalHeading}</p>
                      <p className="text-5xl pt-2">{subHeading}</p>
                      <p className="text-xl pt-8">{modalData}</p>
                    </div>
                  </div>
                )}
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Navbar className="fixed bg-black">
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <Link href="/">
            <Image
              src="/BU_Logo_no_shadow-positive1.png"
              height={100}
              width={100}
              alt=""
            />
          </Link>

          {/* <NavbarItem>
            <Link className="" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="#">
              Integrations
            </Link>
          </NavbarItem> */}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button
              as={Link}
              className="text-white"
              href="/login"
              variant="bordered"
            >
              เข้าสู่ระบบ
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              className="text-white"
              href="#"
              variant="bordered"
            >
              ENGLISH
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div>
        <Carousel
          className="rounded-xl"
          transition={{ duration: 2 }}
          prevArrow={({ handlePrev }: any) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }: any) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          <img
            src="https://openhouse.bu.ac.th/contents/banner/banner_3.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://openhouse.bu.ac.th/contents/banner/banner_2.jpg?4"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://openhouse.bu.ac.th/contents/banner/banner_3.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <div className="bg-black w-full h-full items-center">
        <div className="flex w-full">
          <p className="text-9xl text-white px-60">LET'S PLAY</p>
          <Button className="w-[200px] mt-12" size="lg">
            ปิดลงทะเบียน
          </Button>
        </div>
        <div className="flex w-full">
          <div className="px-40 flex">
            <Image
              src="/mascot_camera.BY9lPYQC.svg"
              width={200}
              height={200}
              alt=""
            />
            <p className="text-9xl text-red-600">LIKE A PRO</p>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <p className="text-bold text-white text-9xl">
            มาลองเล่นจนกว่าจะมั่นใจ
          </p>
        </div>
        <div className="flex w-full my-30 pt-20 mt-5 ml-20 md:px-40 sm:px-0">
          <div className="flex w-[50%] p-5">
            <Button
              className="justify-start px-40 text-2xl h-[5em]"
              disabled={true}
              size="lg"
            >
              Highlight
            </Button>
            <Image
              src="/mascot_highlight.DE8xMUYF.svg"
              width={150}
              height={150}
              alt=""
              className="-my-[18em]"
            />
          </div>
          <div className="w-[50%] p-5">
            <Button
              className="justify-end px-20 text-2xl h-[5em]"
              size="lg"
              disabled={true}
            >
              เล่นควิซหาความโปรในตัวคุณ
            </Button>
          </div>
        </div>
        <div className="bg-yellow-100 flex-col items-center pb-10">
          <div className="flex items-center p-10">
            <div className="p-5">
              <Image
                src="/1.jpg"
                width={500}
                height={1000}
                alt=""
                className="rounded-xl hover:scale-110"
                onClick={() => {
                  onOpen();
                  setModalImage("1.jpg");
                  setModalType("imageModal");
                  setModalHeading("PRO-CENTER");
                  setModalData(
                    "จุดเริ่มต้นเส้นทางการลองที่ทุกคนจะได้เจอบริเวณอาคาร A3 เป็นจุดลงทะเบียนกลาง พร้อมให้ข้อมูลเกี่ยวกับคณะและสาขาต่าง ๆ มีรุ่นพี่แนะนำกิจกรรมไฮไลต์น่าสนใจ และตารางเวลาทั้งหมด อีกทั้งยังมีของเด็ดรอให้ไปลองเล่นคือ ‘FIND YOUR PRO-PASSION QUIZ’ ที่จะพาทุกคนรู้จักความชอบของตัวเองมากขึ้น คลัสเตอร์ไหน คณะไหนที่เหมาะกับคุณ และเป็นตัวช่วยปักหมุดเส้นทางให้ได้ไปลองเล่นที่คณะต่าง ๆ ได้ง่ายกว่าเดิม นอกจากนี้ยังมี PRO-STAGE เป็นกิจกรรมกลางไว้ให้ทุกคนได้มาเอ็นจอยกันอีกด้วย"
                  );
                  setSubHeading("ลองรู้จักตัวเอง");
                }}
              />
            </div>
            <div className="p-5">
              <Image
                src="/2.jpg"
                width={500}
                height={1000}
                alt=""
                className="rounded-xl hover:scale-110"
                onClick={() => {
                  onOpen();
                  setModalImage("2.jpg");
                  setModalType("imageModal");
                  setModalHeading("CLUSTER CENTER");
                  setModalData(
                    "มาลองหาคณะที่ใช่ สาขาและกิจกรรมที่อยากลองได้ที่จุดนี้ Cluster Center จุดรวมพลของคนมี DNA เดียวกัน ไม่ว่าจะ Business Creative Innovative และ BU International ด้วย Character ที่ออกแบบมาโดยเฉพาะ ช่วยบอกตำแหน่งของแต่ละคลัสเตอร์กระจายตามที่ต่าง ๆ เป็นจุดให้ข้อมูลรายชื่อคณะ พร้อมตารางกิจกรรมในคลัสเตอร์นั้น ๆ"
                  );
                  setSubHeading("ลองหาแพชชัน");
                }}
              />
            </div>
            <div className="p-5">
              <Image
                src="/3.jpg"
                width={500}
                height={1000}
                alt=""
                className="rounded-xl hover:scale-110"
                onClick={() => {
                  onOpen();
                  setModalImage("3.jpg");
                  setModalType("imageModal");
                  setModalHeading("PRO-ACTIVITIES");
                  setModalData(
                    "พื้นที่ของการลองเล่นเพื่อหาความโปรให้กับแพชชันที่ชอบ ด้วยกิจกรรมมากมายหลากหลายเต็มไปหมดจากคณะสาขาต่าง ๆ เปิดโอกาสให้ทุกคนที่มาเข้าร่วมได้ลองคิดจริง ลองจับอุปกรณ์จริง ลองลงมือทําจริง ได้ความรู้จากอาจารย์ตัวจริงในสาขา และเปิดโลกไปกับ Pro-Partner ของ BU ที่เชี่ยวชาญของจริง และมีรุ่นพี่คอยพูดคุย ดูแล แชร์ประสบการณ์ชีวิตมหาลัยของจริงให้ทุกคนสนุกไปด้วยกัน เป็นการลองเล่นให้เป็นโปร สัมผัสประสบการณ์ของจริงที่ไม่เคยลองได้ที่ไหนนอกจากที่ BU OPEN HOUSE นี้"
                  );
                  setSubHeading("ลองฝึกทําจริง");
                }}
              />
            </div>
            <div className="p-5">
              <Image
                src="/6.jpg"
                width={500}
                height={1000}
                alt=""
                className="rounded-xl hover:scale-110"
                onClick={() => {
                  onOpen();
                  setModalImage("6.jpg");
                  setModalType("imageModal");
                  setModalHeading("PRO-CERTIFICATE");
                  setModalData(
                    "ไฮไลต์สําคัญอีกอย่างหนึ่งในปีนี้นอกจากการลองเล่นอย่างสมจริงแล้ว อีกหนึ่งของสําคัญที่จะได้กลับไปคือ ‘E-Certificate’ ช่วยการันตีความโปรที่คุณได้ลองมากมาย ด้วยการสแกน Qr Code ที่จุดร่วมกิจกรรม เพื่อรับใบเซอร์กลับไปสะสมลงพอร์ตอัปสกิลกันอย่างปัง ๆ ได้เลย"
                  );
                  setSubHeading("ลองล่าใบเซอร์ใส่พอร์ต");
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <p className="text-9xl">IT'S TIME TO BE A PRO</p>
            <div className="flex px-[10rem] mr-10">
              <div className="flex flex-col items-center">
                <Image
                  src="/logo_promote.BfDpTJP0.png"
                  width={500}
                  height={500}
                  alt=""
                ></Image>
                <p className="p-8 text-2xl">
                  ปรากฏการณ์สำคัญที่พาทุกคนมาลองให้ตาแตก!
                  มาลองตอบคำถามให้ทุกแพชชัน ได้ลองฟังของจริง ได้ลองคิดครีเอท
                  ได้ลองสนุกทุกคณะ แล้วมาลองเล่นให้เป็นโปรกันโดยพร้อมเพรียง!
                  มาค่ะ มาครับ มาค่า มาฮะ มาฮ้าฟฟู่ว!
                </p>
              </div>
              <div className="flex flex-col w-full pl-5">
                <div className="border-b-1 border-black pb-10 pt-5 items-start">
                  <h1 className="text-4xl pb-1">ลองคิดแหวกกรอบ</h1>
                  <h1 className="text-3xl pb-1">(CREATIVE CLUSTER)</h1>
                  <Link href="/creative">
                    <Button
                      className="rounded-xl bg-red-500 text-white px-[4.5em]"
                      size="lg"
                    >
                      ดูรายละเอียดเพิ่มเติม
                    </Button>
                  </Link>
                </div>
                <div className="border-b-1 border-black pb-10 pt-5 items-start">
                  <h1 className="text-4xl pb-1">ลองบริหารความรวย</h1>
                  <h1 className="text-3xl pb-1">(BUSINESS CLUSTER)</h1>
                  <Link href="/business">
                    <Button
                      className="rounded-xl bg-blue-700 text-white px-[4.5em]"
                      size="lg"
                    >
                      ดูรายละเอียดเพิ่มเติม
                    </Button>
                  </Link>
                </div>
                <div className="border-b-1 border-black pb-10 pt-5 items-start">
                  <h1 className="text-4xl pb-1">ลองสร้างสิ่งล้ำ</h1>
                  <h1 className="text-3xl pb-1">(INNOVATIVE CLUSTER)</h1>
                  <Link href="/innovative">
                    <Button
                      className="rounded-xl bg-green-400 text-white px-[4.5em]"
                      size="lg"
                    >
                      ดูรายละเอียดเพิ่มเติม
                    </Button>
                  </Link>
                </div>
                <div className="border-b-1 border-black pb-10 pt-5 items-start">
                  <h1 className="text-4xl pb-1">ลองโกอินเตอร์</h1>
                  <h1 className="text-3xl pb-1">(BU INTERNATIONAL)</h1>
                  <Link href="/bu-international">
                    <Button
                      className="rounded-xl bg-pink-300 text-white px-[4.5em]"
                      size="lg"
                    >
                      ดูรายละเอียดเพิ่มเติม
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex mt-5 pt-10">
              <div className="flex flex-col">
                <div className="flex">
                  <Image
                    src="/mascot_innovative.DIc6bZSG.svg"
                    alt=""
                    height={200}
                    width={200}
                    className="-my-80 overflow-auto"
                  />
                  <p className="text-9xl"> FAQ </p>
                  <div className="flex flex-col py-5 px-5">
                    <p className="text-5xl">ใครมีคำถาม</p>
                    <p className="text-7xl">มาค่า!</p>
                  </div>
                </div>
                <Button
                  className="bg-green-400 text-white mt-5"
                  size="lg"
                  onPress={() => {
                    onOpen();
                    setModalData(
                      "มารวมตัวพร้อมกันได้ในวันที่ 29-31 สิงหาคม 2567 ณ มหาวิทยาลัยกรุงเทพ Main campus (รังสิต)"
                    );
                    setModalHeading(
                      "งาน BU Open House 2024 จัดขึ้นเมื่อไหร่และจัดที่ไหน?"
                    );
                  }}
                >
                  งาน BU Open House 2024 จัดขึ้นเมื่อไหร่และที่ไหน?
                </Button>
                <Button
                  className="bg-pink-400 text-white mt-5"
                  size="lg"
                  onPress={() => {
                    onOpen();
                    setModalData(
                      "ลงทะเบียนครั้งเดียวสําหรับเข้าร่วมงาน BU OPEN HOUSE แล้วสามารถดูตาราง กิจกรรมของคณะในคลัสเตอร์ต่าง ๆ ได้ที่หน้าเว็บไซต์หากสนใจกิจกรรมไหนก็ สามารถไปสแกน QR Code เข้าร่วมที่หน้ากิจกรรมของแต่ละคณะ/สาขาได้เลย"
                    );
                    setModalHeading("เลือกลงทะเบียนเข้าร่วมกิจกรรมได้กี่คณะ?");
                  }}
                >
                  เลือกลงทะเบียนเข้าร่วมกิจกรรมได้กี่คณะ?
                </Button>
                <Button
                  className="bg-orange-400 text-white mt-5"
                  size="lg"
                  onPress={() => {
                    onOpen();
                    setModalData(
                      "สําหรับกิจกรรมทุกคณะ จะเริ่มตั้งแต่เวลา 9.00-16.30 น. และมีต่อกับกิจกรรมสุดพิเศษช่วงเย็นสําหรับคอนเสิร์ตและโชว์วงดนตรีที่เวทีกลางบริเวณโถงอาคาร C6 หอสมุดสุรัตน์ โอสถานุเคราะห์ ตั้งแต่เวลา 17.00-20.00 น."
                    );
                    setModalHeading(
                      "กิจกรรมคณะต่าง ๆ เริ่มตั้งแต่กี่โมงและสิ้นสุดเมื่อไหร่?"
                    );
                  }}
                >
                  กิจกรรมคณะต่าง ๆ เริ่มตั้งแต่กี่โมงและสิ้นสุดเมื่อไหร่?
                </Button>
              </div>
              <div className="flex flex-col ml-5">
                <div className="flex flex-col text-blue-700 w-[50%] h-[10em] mx-40 items-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    className="eye-interact"
                    data-name="Layer 1"
                    viewBox="0 0 220 432"
                    width="16 md:35"
                    data-v-d0214cd4=""
                  >
                    <path
                      id="rope"
                      d="m118.06 299.37 9.04 2.6 18.09-63c.27-.84 29.61-96.25-37.41-130.58l-4.29 8.37c24.94 12.78 38.08 36.52 39.05 70.59.74 26.09-6.28 48.67-6.35 48.9z"
                    ></path>
                    <path
                      id="bomb"
                      d="m188.02 251.47 6.53-22.76L98.04 201l-6.53 22.76c-36.22 8.11-67 35.24-77.96 73.43-15.98 55.67 16.19 113.76 71.86 129.74s113.76-16.19 129.74-71.86c10.96-38.19-.74-77.51-27.13-103.6"
                    ></path>
                    <g id="spark">
                      <path
                        id="spark"
                        d="M126.22.97 97.72 56.6 65.45 3.07l9.64 61.75-57.56-24.33 44.09 44.29L.75 98.93l61.71 9.91-40.94 47.23 55.75-28.26-5.35 62.28 28.49-55.63 32.27 53.52-9.64-61.75 57.57 24.34-44.1-44.29 60.88-14.15-61.71-9.91 40.93-47.23-55.75 28.25z"
                      ></path>
                      <path
                        id="spark-in"
                        d="M109.14 60.45 98.57 81.08 86.6 61.23l3.57 22.91-21.35-9.03 16.36 16.43-22.59 5.25 22.89 3.68-15.18 17.52 20.68-10.48-1.99 23.1 10.58-20.64 11.97 19.86-3.58-22.91 21.36 9.03-16.36-16.43 22.58-5.25-22.89-3.68 15.18-17.52-20.68 10.48z"
                      ></path>
                    </g>
                    <g id="eye">
                      <circle
                        id="white-eye"
                        cx="117.71"
                        cy="327.51"
                        r="56.69"
                      ></circle>
                      <circle
                        id="black-eye"
                        cx="117.71"
                        cy="327.51"
                        r="34.01"
                        data-svg-origin="117.70999526977539 327.5099983215332"
                        transform="matrix(1,0,0,1,-20.3492,1.5993)"
                      ></circle>
                    </g>
                  </svg>
                </div>
                <Button
                  className="bg-blue-600 text-white mt-5"
                  size="lg"
                  onPress={() => {
                    onOpen();
                    setModalData(
                      "สามารถลงทะเบียนเพื่อร่วมงาน BU OPEN HOUSE ล่วงหน้าได้ที่ https://openhouse.bu.ac.th/register หรือลงทะเบียนหน้างานได้ที่ PRO-CENTER บริเวณใต้ตึก A3"
                    );
                    setModalHeading("เข้าร่วมงานต้องลงทะเบียนไหม?");
                  }}
                >
                  เข้าร่วมงานต้องลงทะเบียนไหม?
                </Button>
                <Button
                  className="bg-red-400 text-white mt-5"
                  size="lg"
                  onPress={() => {
                    onOpen();
                    setModalData(
                      "มหาวิทยาลัยกรุงเทพเราเปิดรับความหลากหลาย ทุกคนสามารถแต่งกายได้ทั้งเครื่องแบบสถาบัน หรือชุดฟรีสไตล์ของตัวเอง แต่ยังสุภาพเหมาะสมกับสถานศึกษาได้เลย"
                    );
                    setModalHeading("การแต่งกาย ใส่ชุดอะไรไปดี?");
                  }}
                >
                  การแต่งกายใส่ชุดอะไรไปดี?
                </Button>
                <Button
                  className="bg-slate-500 text-white mt-5"
                  size="lg"
                  onPress={() => {
                    onOpen();
                    setModalData(
                      "ทุกคณะจะมีกิจกรรมเปิดบ้านให้เข้าร่วมทั้ง 3 วัน สามารถเช็กตารางกิจกรรมได้ที่หน้าแรกตามแต่ละคลัสเตอร์ซึ่งบางคณะจะมีกิจกรรมไฮไลต์แต่ละวันไม่เหมือนกันอย่าลืมวางแผนเพื่อไม่ให้พลาดกิจกรรมที่ชอบนะคะ"
                    );
                    setModalHeading(
                      "ทุกคณะมีเปิดบ้านทุกวันไหม? และทั้ง 3 วันมีกิจกรรมเหมือนกันไหม?"
                    );
                  }}
                >
                  ทุกคณะมีเปิดบ้านทุกวันไหม? และทั้ง 3 วันกิจกรรมเหมือนกันไหม?
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-blue-950 items-center p-5">
          <Image
            src="/mascot_business.CLXPf025.svg"
            alt=""
            height={200}
            width={200}
          />
          <div className="flex">
            <div className="flex flex-col text-white">
              <p className="text-6xl">พร้อมมาค่ะ</p>
              <p className="text-6xl">BU ให้มาทางนี้ค่ะ</p>
              <p className="pt-3 text-xl">การเดินทาง</p>
              <div className="flex">
                <p className="pt-3 text-xl text-bold">รถเมล์ : </p>
                <p className="text-xl font-thin pt-3 ml-2">
                  สาย 39 ปอ.510 / ปอ.520
                </p>
              </div>
              <p className="pt-3 text-xl">
                รถตู้ สาย ต.85-93 (ฝั่งเกาะพญาไท) :
              </p>
              <ul>
                <li className="font-thin text-xl pl-5 p-2">
                  <p>
                    ๐ อนุสาวรีย์ชัยสมรภูมิ-มธ. (ศูนย์รังสิต) - ใกล้ BTS
                    อนุสาวรีย์ชัยสมรภูมิ
                  </p>
                  <p>๐ สาย ต.118-1 หมอชิต-มธ. (ศูนย์รังสิต)</p>
                  <p>๐ สาย 1008 (อยู่ตรงข้างฟิวเจอร์พาร์ค รังสิต)</p>
                  <p>๐ ช่วงรังสิต-มธ. (ศูนย์รังสิต)</p>
                </li>
              </ul>
              <p className="pt-3 text-xl">สายไฟฟ้าสายสีเขียว (BTS) :</p>
              <ul>
                <li className="font-thin text-xl pl-5 p-2">
                  <p>๐ ลงสถานีหมอชิต (ทางออก 3,4) ต่อรถตู้สาย ต. 118-1</p>
                  <p>
                    ๐ ลงสถานีอนุสาวรีย์ชัยสมรภูมิ (ทางออก 3,4) ต่อรถตู้สาย
                    ต.85-93 (ฝั่งเกาะพญาไท)
                  </p>
                  <p>๐ ลงสถานีแยกคปอ. (ทางออก 1,3) ต่อรถเมล์ สาย 39,520</p>
                </li>
              </ul>
              <p className="pt-3 text-xl">รถไฟฟ้าสายสีน้ำเงิน (MRT) :</p>
              <ul>
                <li className="font-thin text-xl pl-5 p-2">
                  <p>
                    ๐ ลงสถานีจตุจักร (ทางออก 3,4) ต่อรถตู้สาย ต.118-1 หมอชิต-มธ.
                    (ศูนย์รังสิต)
                  </p>
                </li>
              </ul>
              <p className="pt-3 text-xl">รถไฟฟ้าสายสีแดง (SRT) :</p>
              <ul>
                <li className="font-thin text-xl pl-5 p-2">
                  <p>
                    ๐ ลงสถานี รังสิต ทางออกที่ 3 ต่อรถสองแถวสาย รังสิต-จารุศร
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-white h-[42em] w-[40em] ml-20">MAP</div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-red-600 w-[10em] h-[15em]"></div>
          <div className="bg-red-600 h-[15em] w-[30em] flex flex-col items-end p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              className="eye-interact svg-animate"
              data-name="Layer 1"
              viewBox="0 0 580 284"
              data-v-250f4658=""
            >
              <g id="left-eye">
                <circle
                  id="white-eye"
                  cx="141.58"
                  cy="142.8"
                  r="141.42"
                  fill="#fff"
                ></circle>
                <circle
                  id="black-eye"
                  cx="141.58"
                  cy="142.8"
                  r="59.44"
                  fill={"rgb(0, 0, 0)"}
                  data-svg-origin="141.57999801635742 142.79999923706055"
                  transform="matrix(1,0,0,1,57.294,46.4886)"
                ></circle>
              </g>
              <g id="right-eye">
                <circle
                  id="white-eye"
                  cx="438.42"
                  cy="141.2"
                  r="141.42"
                ></circle>
                <circle
                  id="black-eye"
                  cx="438.42"
                  cy="141.2"
                  r="59.44"
                  data-svg-origin="438.4200096130371 141.19999313354492"
                  transform="matrix(1,0,0,1,29.3074,67.7116)"
                ></circle>
              </g>
            </svg>
          </div>
          <div className="bg-red-300 w-[15em] h-[15em] p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              className="eye-interact svg-animate"
              data-name="Layer 1"
              viewBox="0 0 262 262"
              data-v-250f4658=""
            >
              <g id="eye">
                <ellipse
                  id="white-eye"
                  cx="131"
                  cy="131"
                  rx="59.1"
                  ry="29.6"
                  strokeWidth={0}
                  fill="#fff"
                ></ellipse>
                <path
                  id="black-eye"
                  d="M125.4 102.1c15.9-3 31.3 7.4 34.3 23.4s-7.4 31.3-23.4 34.3-31.3-7.4-34.3-23.4 7.4-31.3 23.4-34.3"
                  strokeWidth="0px"
                  fill="rgb(0, 0, 0)"
                  rotate="none"
                  scale="none"
                  transform-origin="0px 0px;"
                  data-svg-origin="130.85000228881836 130.95001220703125"
                  transform="matrix(1,0,0,1,2.8227,26.612)"
                ></path>
              </g>
              <path
                id="flower"
                d="M261.03 131c0-14.36-12.48-31.14-47.65-31.14-2.52 0-5.29.15-8.27.44 2.32-1.9 4.38-3.76 6.16-5.54 10.18-10.18 16.61-20.76 18.58-30.59 1.96-9.78-.49-18.71-6.9-25.12-6.41-6.42-15.34-8.86-25.12-6.9-9.83 1.97-20.41 8.4-30.59 18.58-1.78 1.78-3.63 3.85-5.54 6.16.29-2.98.44-5.75.44-8.27C162.14 13.45 145.37.97 131 .97S99.86 13.45 99.86 48.62c0 2.52.15 5.29.44 8.27-1.9-2.32-3.76-4.38-5.54-6.16C84.58 40.55 74 34.12 64.17 32.15c-9.78-1.96-18.7.49-25.12 6.9-6.42 6.42-8.87 15.34-6.9 25.12 1.97 9.83 8.4 20.41 18.58 30.59 1.78 1.78 3.85 3.64 6.16 5.54-2.98-.29-5.75-.44-8.27-.44C13.45 99.86.97 116.64.97 131s12.48 31.14 47.65 31.14c2.52 0 5.29-.15 8.27-.44-2.32 1.9-4.38 3.76-6.16 5.54-24.87 24.87-21.83 45.56-11.68 55.71 6.41 6.42 15.34 8.87 25.12 6.9 9.83-1.97 20.41-8.4 30.59-18.58 1.78-1.78 3.63-3.85 5.54-6.16-.29 2.98-.44 5.75-.44 8.27 0 35.17 16.77 47.65 31.14 47.65s31.14-12.48 31.14-47.65c0-2.52-.15-5.29-.44-8.27 1.9 2.32 3.76 4.38 5.54 6.16 10.18 10.18 20.76 16.61 30.59 18.58 9.78 1.96 18.7-.49 25.12-6.9 10.16-10.16 13.19-30.84-11.68-55.71-1.78-1.78-3.85-3.63-6.16-5.54 2.98.29 5.75.44 8.27.44 35.17 0 47.65-16.77 47.65-31.14M131 160.65c-32.65 0-59.12-13.27-59.12-29.65s26.47-29.65 59.12-29.65 59.12 13.27 59.12 29.65-26.47 29.65-59.12 29.65"
                fill="#ff2700"
                stroke-width={0}
              ></path>
            </svg>
          </div>
          <div className="bg-blue-200 w-[20em] h-[15em] p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 360 226"
              className="svg-animate"
              data-v-250f4658=""
            >
              <path
                id="left"
                d="M61.92 1.24c33.65 0 60.92 50.04 60.92 111.76 0 61.73-27.27 111.76-60.92 111.76h-.08C28.19 224.76.92 174.72.92 113S28.19 1.24 61.84 1.24"
                fill="#0c5cfd"
                stroke-width={0}
              ></path>
              <path
                id="middle"
                d="M180.04 1.24c33.65 0 60.92 50.04 60.92 111.76 0 61.73-27.27 111.76-60.92 111.76h-.08c-33.65 0-60.92-50.04-60.92-111.76S146.31 1.24 179.96 1.24"
                fill="#0c5cfd"
                stroke-width={0}
              ></path>
              <path
                id="right"
                d="M298.16 1.24c33.65 0 60.92 50.04 60.92 111.76 0 61.73-27.27 111.76-60.92 111.76h-.08c-33.65 0-60.92-50.04-60.92-111.76S264.44 1.24 298.08 1.24"
                fill="#0c5cfd"
                stroke-width={0}
              ></path>
            </svg>
          </div>
          <div className="bg-purple-200 w-[15em] h-[15em] p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              className="eye-interact svg-animate"
              data-name="Layer 1"
              viewBox="0 0 304 296"
              data-v-250f4658=""
            >
              <g id="top-left-eye">
                <circle
                  id="white-eye"
                  cx="71.39"
                  cy="71.62"
                  r="70.58"
                  stroke-width={0}
                  fill="#fff;"
                ></circle>
                <circle
                  id="black-eye"
                  cx="71.39"
                  cy="71.62"
                  r="29.67"
                  fill="rgb(0, 0, 0)"
                  stroke-width="0px"
                  rotate="none"
                  scale="none"
                  transform-origin="0px 0px"
                  data-svg-origin="71.39000129699707 71.62000465393066"
                  transform="matrix(1,0,0,0.7722,-36.8012,17.46054)"
                ></circle>
              </g>
              <g id="top-right-eye">
                <circle
                  id="white-eye"
                  cx="231.94"
                  cy="71.34"
                  r="70.58"
                  stroke-width={0}
                  fill="#fff"
                ></circle>
                <circle
                  id="black-eye"
                  cx="231.94"
                  cy="71.34"
                  r="29.67"
                  fill="rgb(0, 0, 0)"
                  stroke-width="0px"
                  rotate="none"
                  scale="none"
                  transform-origin="0px 0px"
                  data-svg-origin="231.94000434875488 71.33999824523926"
                  transform="matrix(1,0,0,0.7722,-36.8099,17.07075)"
                ></circle>
              </g>
              <g id="bottom-left-eye">
                <circle
                  id="white-eye"
                  cx="72.06"
                  cy="224.66"
                  r="70.58"
                  stroke-width={0}
                  fill="#fff"
                ></circle>
                <circle
                  id="black-eye"
                  cx="72.06"
                  cy="224.66"
                  r="29.67"
                  fill="rgb(0, 0, 0)"
                  stroke-width="0px"
                  rotate="none"
                  scale="none"
                  transform-origin="0px 0px"
                  data-svg-origin="72.05999946594238 224.660005569458"
                  transform="matrix(1,0,0,0.7722,-36.2152,44.53705)"
                ></circle>
              </g>
              <g id="bottom-right-eye">
                <circle
                  id="white-eye"
                  cx="232.61"
                  cy="224.38"
                  r="70.58"
                  stroke-width={0}
                  fill="#fff"
                ></circle>
                <circle
                  id="black-eye"
                  cx="232.61"
                  cy="224.38"
                  r="29.67"
                  fill="rgb(0, 0, 0)"
                  stroke-width="0px"
                  rotate="none"
                  scale="none"
                  transform-origin="0px 0px"
                  data-svg-origin="232.6100025177002 224.38000679016113"
                  transform="matrix(1,0,0,0.7722,-36.409,45.63437)"
                ></circle>
              </g>
            </svg>
          </div>
          <div className="bg-purple-200 w-[15em] h-[15em] p-5">
            {/* <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" className="eye-interact svg-animate" data-name="Layer 1" viewBox="0 0 304 296" data-v-250f4658=""><g id="top-left-eye"><circle id="white-eye" cx="71.39" cy="71.62" r="70.58" stroke-width={0} fill="#fff;"></circle><circle id="black-eye" cx="71.39" cy="71.62" r="29.67" fill="rgb(0, 0, 0)" stroke-width="0px" rotate="none" scale="none" transform-origin="0px 0px" data-svg-origin="71.39000129699707 71.62000465393066" transform="matrix(1,0,0,0.7722,-36.8012,17.46054)"></circle></g><g id="top-right-eye"><circle id="white-eye" cx="231.94" cy="71.34" r="70.58" stroke-width={0} fill="#fff"></circle><circle id="black-eye" cx="231.94" cy="71.34" r="29.67" fill="rgb(0, 0, 0)" stroke-width="0px" rotate="none" scale="none" transform-origin="0px 0px" data-svg-origin="231.94000434875488 71.33999824523926" transform="matrix(1,0,0,0.7722,-36.8099,17.07075)"></circle></g><g id="bottom-left-eye"><circle id="white-eye" cx="72.06" cy="224.66" r="70.58" stroke-width={0} fill="#fff"></circle><circle id="black-eye" cx="72.06" cy="224.66" r="29.67" fill="rgb(0, 0, 0)" stroke-width="0px" rotate="none" scale="none" transform-origin="0px 0px" data-svg-origin="72.05999946594238 224.660005569458" transform="matrix(1,0,0,0.7722,-36.2152,44.53705)"></circle></g><g id="bottom-right-eye"><circle id="white-eye" cx="232.61" cy="224.38" r="70.58" stroke-width={0} fill="#fff"></circle><circle id="black-eye" cx="232.61" cy="224.38" r="29.67" fill="rgb(0, 0, 0)" stroke-width="0px" rotate="none" scale="none" transform-origin="0px 0px" data-svg-origin="232.6100025177002 224.38000679016113" transform="matrix(1,0,0,0.7722,-36.409,45.63437)"></circle></g></svg> */}
          </div>
        </div>
        <div className="flex flex-col items-center bg-gray-900 h-[15em] w-full text-white">
          <div className="flex p-10">
            <div className="flex flex-col text-lg">
              <p>9, 1 Phahonyothin Rd, Khlong Nueng,</p>
              <p>Khlong Luang, Pathum Thani 12120</p>
              <p className="pt-8">© 2024 by Bangkok University</p>
            </div>
            <div className="flex flex-col w-[30em]"></div>
            <div className="flex flex-col text-lg">
              <div className="flex p-5">
                <Facebook />
                <p className="pl-2">Bangkok University</p>
              </div>
              <div className="flex p-5">
                <Instagram />
                <p className="pl-2">@BANGKOK_BU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
