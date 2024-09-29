import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input} from "@nextui-org/react";
import AcmeLogo from "../AcmeLogo";
import Image from 'next/image'

export default function LoginPage() {
    return <main className='bg-black w-screen'>
        <Navbar className="fixed bg-black">
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <Link href="/">
                <Image src='/BU_Logo_no_shadow-positive1.png' height={100} width={100} alt=''/>
            </Link>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button as={Link} className="text-white" href="/login" variant="bordered">
              เข้าสู่ระบบ
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} className="text-white" href="#" variant="bordered">
              ENGLISH
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="flex flex-col items-center pt-20 mt-18 bg-black">
        <p className="text-9xl text-white font-bold pt-20">BU OPEN HOUSE 2024</p>
        <div className='flex flex-col bg-yellow-50 w-[50em] h-[22em] mt-10 rounded-xl items-center'>
            <div className="flex w-full">
                <div className="flex flex-col w-[50%]">
                    <div className="flex pt-10 pl-10 items-start text-2xl ml-5">
                        <p className="text-black">E-mail</p>
                        <p className="text-red-600 pl-1">*</p>
                    </div>
                    <Input type="email" variant="bordered" className="border-black mx-[3.6em] pt-2 w-[43em]"></Input>
                    <div className="flex pt-10 pl-10 items-start text-2xl ml-5">
                        <p className="text-black">รหัสผ่าน (เบอร์โทรศัพท์)</p>
                        <p className="text-red-600 pl-1">*</p>
                    </div>
                    <Input type="email" variant="bordered" className="border-black mx-[3.6em] pt-2 w-[43em]"></Input>
                </div>
                <div className="items-end w-[50%]">
                    <p className="text-gray-400 justify-end mx-[11.5em] my-[3em] w-[50%]">FORGOT YOUR EMAIL?</p>
                    <p className="text-gray-400 justify-end mx-[9.5em] my-[6em] w-[50%]">FORGOT YOUR PASSWORD?</p>
                </div> 
            </div>
            <Button className="rounded-xl text-white bg-red-600 -my-5" size='lg'>เข้าสู่ระบบ</Button>
        </div>
        <div className="flex flex-col w-full bg-red-600 items-center p-20">
            <Image src='/logo_bu_benzilla.Dc9OhMsC.svg' height={300} width={300} alt=''/>
        </div>
      </div>
    </main>
}