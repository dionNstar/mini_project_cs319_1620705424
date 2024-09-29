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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { AcmeLogo } from "../AcmeLogo";
import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";
import { Facebook, Instagram } from "lucide-react";

interface cardData {
  heading: string;
  detail: string;
  mainDetail: string;
}

const cardsData: cardData[] = [
  {
    heading:
      "การนำเสนอแนวความคิดการออกแบบด้วยเทคนิค Collage",
    detail: "คณะสถาปัตยกรรมศาสตร์ | สาขาวิชาสถาปัตยกรรม (หลักสูตร 5 ปี)",
    mainDetail: `
       Workshop ที่จะมาช่วยเสริมจินตนาการของน้องๆ ให้กว้างมากยิ่งขึ้น ด้วยการใช้เทคนิคการปะติด (collage) 
       เพื่อเสนอแนวความคิดเกี่ยวกับมุมมองทางสถาปัตยกรรม ผ่านการตัดภาพจากนิตยสาร เพื่อนำมาประกอบรวมเป็นไอเดียใหม่ 
       ตามแนวคิดของตนเอง ไม่ว่าจะเป็นรูปภาพบ้าน ตึก สถาปัตยกรรม landscape รวมถึงผู้คนในรูปแบบต่างๆ แล้วมาดูกันว่าเราจะถ่ายทอดจินตนาการออกแบบมาในรูปแบบใด 
       รับรองว่าจะสนุกกับการนำเสนอความคิดสร้างสรรค์อย่างแน่นอน
      สถานที่ : B5 ชั้น 2
      รอบกิจกรรม: 2 รอบต่อวัน   11.00-11.40 / 14.00-14.40 น.
      รอบละ 40 นาที จำนวนคนต่อรอบ 20 คน  
  `,
  },
  {
    heading:
      "เทคนิคการเป็นดีเจ และพอดแคสต์: DJ & Podcast Skills",
    detail: "คณะนิเทศศาสตร์ | สาขาวิชาวิทยุกระจายเสียง วิทยุโทรทัศน์ และการผลิตสื่อสตรีมมิ่ง",
    mainDetail: `
    ใครที่ชอบการพูดเป็นชีวิตจิตใจ เล่าอะไรใครก็ฟัง อยากจัดรายการเป็นของตัวเอง ต้องมาลองที่ Workshop นี้ Pro-DJ จาก บริษัท Mellow Pop เครือ MCOT จะพาน้องๆ ได้เรียนรู้การจัดรายการ Podcast ได้รู้หัวใจสำคัญของการเป็น DJ มืออาชีพ ลองฝึกออกเสียงชัดถ้อยชัดคำ ลองจัดลำดับเพลงในรายการ ลองเลือกเพลงให้สอดคล้องต่อเนื่อง ลองคิดเนื้อหาที่จะนำมาใช้ในการจัดรายการ การันตีความโปรให้ไปเปิดช่องของตัวเองได้เลย
    สถานที่ : Media Center อาคาร C2 ชั้น 2
    4 รอบ ต่อวัน: เวลา 10.00 / 11.00 / 13.00 / 14.00 น.
    รอบละ 45 นาที จำนวนคนต่อรอบ 20 คน 
    `,
  },
  {
    heading:
      "กิจกรรมออกแบบและวาดภาพคาแรคเตอร์",
    detail: "คณะศิลปกรรมศาสตร์ | สาขาวิชาศิลปะและการออกแบบ",
    mainDetail: `
    ครที่มีฝันอยากสร้างตัวละครในดวงใจ แต่ไม่รู้จะทำอย่างไรออกมาให้ดี ลองมาทำกิจกรรม workshop นี้ ร่วมกันเลือก keyword หรือ basic form เพื่อนำมาใช้ในการวาดออกแบบเป็นคาแรคเตอร์ตามที่ตนเองชอบ สามารถเลือกวาดในกระดาษ หรือ ทดลองใช้อุปกรณ์ wacom ทำเป็นรูปแบบดิจิทัลก็ได้ สามารถทำเป็นรูปแบบตัวการ์ตูน จาก template ​ที่มี เป็นกิจกรรมที่ได้ลองใช้ของจริงจาก partner กับ Computer union ตัวแทนจำหน่ายผลิตภัณฑ์ Wacom และ Huion  
สถานที่ : RB1-208
8 รอบ ต่อวัน: 10.00/10.30/11.00/11.30/13.00/13.30/14.00/14.30 น.
รอบละ 30 นาที จำนวนคนต่อรอบ 30 คน 
    `,
  },
  {
    heading:
    "การฝึกการแสดงแบบเสมือนจริง : “The Journey” Virtual Experience Acting Workshop",
    detail: "คณะนิเทศศาสตร์ | สาขาวิชาศิลปะการแสดง",
    mainDetail: `
    Virtual Experience Acting Studio ที่เหนือกว่า Acting Studio ทั่วไป เมื่อห้องเรียนการแสดง กลายเป็นพื้นที่มหัศจรรย์ให้น้อง ๆ ได้ค้นพบอารมณ์ ความรู้สึก และสัญชาตญาณที่อาจหลงลืมไป มาลองค้นให้ลึกในใจของตัวเองด้วยเทคโนโลยี Projection Design นวัตกรรมที่คิดค้นโดยภาควิชาศิลปะการแสดง มหาวิทยาลัยกรุงเทพ ที่เดียวของโลก นำพาทุกคนเดินทางสู่เส้นทางของความจริงและจินตนาการที่รวมเข้าด้วยกัน ทั้งรูป กลิ่น เสียง ปลดปล่อยจิตใจให้อิสระ​ในห้องเรียนแห่งประสบการณ์เสมือนจริงนี้ เพื่อค้นพบตัวตนและ Passion ของคุณ​
สถานที่ : PA Play space ชั้น 2
3 รอบ ต่อวัน : เวลา 11.00  / 13.00 / 15.00 น.
รอบละ 45 นาที จำนวนคนต่อรอบ 25 คน  
    `,
  },
  {
    heading:
      "การนำเสนอแนวความคิดการออกแบบภายในด้วยหุ่นจำลอง",
    detail: "คณะสถาปัตยกรรมศาสตร์ | สาขาวิชาสถาปัตยกรรมภายใน",
    mainDetail:   `
    ไหนใครชอบจัดห้องเป็นชีวิตจิตใจ ให้มาลองกิจกรรมนี้ Interior Workshop เปิดโอกาสให้น้อง ๆ ได้ออกแบบห้องนอนเป็นของตัวเอง โดยมีรูปแบบ Furniture และผลิตภัณฑ์หลากหลายชนิดให้เลือกในการตกเเต่งห้องนอนตามพื้นที่ที่กำหนดไว้ น้องๆ จะได้ประกอบหุ่นจำลองที่ตัวเองเลือกมา เเละนำมาจัดสรรลงบนพื้นที่ห้องที่กำหนด โดยคำนึงถึงการใช้งาน และความสวยงามตามความคิดสร้างสรรค์ตัวเอง
สถานที่ : B5 ชั้น 2
รอบกิจกรรม: 2 รอบต่อวัน 10.00-10.40 และ 13.00-13.40
รอบละ 40 นาที จำนวนคนต่อรอบ 20 คน  
    `,
  },
  {
    heading:
      "การจัดวางองค์ประกอบด้านการออกแบบนิเทศศิลป์",
    detail: "คณะศิลปกรรมศาสตร์ | สาขาวิชาการออกแบบนิเทศศิลป์",
    mainDetail: `
    กิจกรรมออกแบบโปสเตอร์ ​ด้วยโปรแกรม Adobe Illustrator และได้รับการสนับสนุน Printer สำหรับคัดเลือกงานพิมพ์ จาก บริษัท แคนนอน มาร์เก็ตติ้ง (ไทยแลนด์) จำกัด​ ให้น้องๆ ได้ฝึกทดลองออกแบบจริง เข้าใจเรื่อง Shape & Form การจัด layout การวางภาพที่เป็นพื้นฐานทางการออกแบบ และได้ทดลองเรื่องการปรับตัวหนังสือ Font/Typeface ปูพื้นฐานการออกแบบของทุกคนให้แน่นยิ่งขึ้น
สถานที่ : RB1-202
8 รอบ ต่อวัน: 10.00/10.30/11.00/11.30/13.00/13.30/14.00/14.30 น.
รอบละ 30 นาที จำนวนคนต่อรอบ 40 คน 
    `,
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
  {
    heading:
      "การแข่งขันการแปลบทซีรีส์ เรื่อง 23.5 องศาที่โลกเอียง (ไทย-อังกฤษ)",
    detail: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว | สาขาวิชาภาษาอังกฤษ",
    mainDetail: "",
  },
];

export default function Home() {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const [modalData, setModalData] = React.useState("");
  const [modalHeading, setModalHeading] = React.useState("");
  const [mainDetail, setMainDetail] = React.useState("");
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
              {/* <ModalHeader className="flex flex-col gap-1 text-4xl">
                {modalHeading}
              </ModalHeader> */}
              <ModalBody>
                <div className="flex flex-col w-full border-b-black border-b-1">
                  <p className="text-2xl pt-2">{modalHeading}</p>
                  <p className="text-xl pt-1">{modalData}</p>
                  <Button size="lg" className="bg-black text-white font-bold max-w-[20em] mt-5 mb-10">
                    ✓ CERTIFICATE
                  </Button>
                </div>
                <p className="break-words font-thin p-5">{mainDetail}</p>
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
      <div className="bg-red-600 w-full h-[40em] flex flex-col">
        <div className="flex">
          <div className="w-[70%] h-[10em]"></div>
          <div className="w-[30%] my-[10em] text-white">
            <Image
              src="/logo_promote.BfDpTJP0.png"
              height={200}
              width={200}
              alt=""
            />
          </div>
        </div>
        <div className="flex text-white px-40 -my-20">
          <div className="flex flex-col w-[100%] h-[10em]">
            <p className="text-7xl font-regular">มาลองกิจกรรม</p>
            <p className="text-8xl font-bold">CREATIVE CLUSTER</p>
          </div>
          <Image
            src="/mascot_creative.pfQX2Ikf.svg"
            width={200}
            height={200}
            alt=""
            className="py-20"
          />
        </div>
        <div className="flex flex-wrap items-center w-full p-10 ml-5">
          {cardsData.map((value: cardData) => (
            <div className="flex w-[50%] h-[40vh]">
              <div className="w-full p-5 h-full">
                <Card className="w-[80vh] h-full border border-black">
                  <CardHeader className="flex gap-3">
                    <div className="flex pl-5 pr-5 pt-2">
                      <div className="w-[28em]">
                        <p className="text-2xl">{value.heading}</p>
                      </div>
                      <Button
                        size="lg"
                        className="bg-black text-white font-bold"
                      >
                        ✓ CERTIFICATE
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="pl-5 pr-5 break-words text-2xl font-light">
                      {value.detail}
                    </p>
                  </CardBody>
                  <Divider className="pr-5 pl-5" />
                  <CardFooter>
                    <Button
                      className="text-black p-5 text-xl"
                      variant="flat"
                      onClick={() => {
                        onOpen();
                        setModalHeading(value.heading);
                        setMainDetail(value.mainDetail);
                        setModalData(value.detail);
                      }}
                    >
                      รายละเอียดกิจกรรม
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ))}
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
