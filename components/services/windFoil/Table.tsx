"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../../ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";
type TableProps = {};

const ServicesTable: React.FC<TableProps> = ({}) => {
  const router = useRouter();
  const t1 = useTranslations("row1");
  const t2 = useTranslations("row2");
  const t3 = useTranslations("row3");
  const t4 = useTranslations("row4");
  const t5 = useTranslations("row5");
  const t6 = useTranslations("row6");
  const t7 = useTranslations("row7");
  const t8 = useTranslations("CompareTitle");
  const wc1 = useTranslations("Windcol1");
  const wc2 = useTranslations("Windcol2");
  const wc3 = useTranslations("Windcol3");
  return (
    <div className="flex flex-col justify-center items-center py-20 ">
      <h1 className="mb-20 text-5xl text-primaryColor font-semibold text-center">
        {t8("title")}
      </h1>
      <Table>
        <TableCaption>{t8("title")}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="flex flex-col h-auto items-center gap-2">
              <p className="text-2xl text-secondaryColor font-semibold">
                {wc1("t")}
              </p>
              <div className=" text-primaryColor flex gap-1">
                <p className="text-2xl leading-none ">{wc1("p")}</p>
              </div>

              <Button
                className="mx-auto rounded-full mb-2"
                onClick={() => router.push("/booking")}
              >
                {wc1("b")}
              </Button>
            </TableHead>
            <TableHead>
              <div className="flex flex-col h-auto items-center gap-2">
                <p className="text-2xl text-secondaryColor font-semibold">
                  {wc2("t")}
                </p>
                <div className=" text-primaryColor flex gap-1">
                  <p className="text-2xl leading-none ">{wc2("p")}</p>
                </div>
                <Button
                  className="mx-auto rounded-full mb-2"
                  onClick={() => router.push("/booking")}
                >
                  {wc2("b")}
                </Button>
              </div>
            </TableHead>
            <TableHead>
              <div className="flex flex-col h-auto items-center gap-2">
                <p className="text-2xl text-secondaryColor font-semibold">
                  {wc3("t")}
                </p>
                <div className=" text-primaryColor flex gap-1">
                  <p className="text-2xl leading-none ">{wc3("p")}</p>
                </div>
                <Button
                  className="mx-auto rounded-full mb-2"
                  onClick={() => router.push("/booking")}
                >
                  {wc3("b")}
                </Button>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="text-primaryColor items-center">
            <TableCell>{t1("r")}</TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t1("s1")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t1("s2")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t1("s3")}</p>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="text-primaryColor items-center">
            <TableCell>{t2("r")}</TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t2("s1")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t2("s2")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t2("s3")}</p>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="text-primaryColor items-center">
            <TableCell>{t3("r")}</TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t3("s1")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t3("s2")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t3("s3")}</p>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="text-primaryColor items-center">
            <TableCell>{t4("r")}</TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t4("s1")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t4("s2")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t4("s3")}</p>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="text-primaryColor items-center">
            <TableCell>{t5("r")}</TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t5("s1")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t5("s2")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t5("s3")}</p>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="text-primaryColor items-center">
            <TableCell>{t6("r")}</TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t6("s1")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t6("s2")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t6("s3")}</p>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="text-primaryColor items-center">
            <TableCell>{t7("r")}</TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t7("s1")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t7("s2")}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center">
                <p>{t7("s3")}</p>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ServicesTable;
