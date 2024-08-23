import Container from "@/components/Container";
import ServiceCard from "@/components/services/ServiceCard";
import { Switch } from "@/components/ui/switch";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QandA from "../QandA";
import KiteServices from "../kitesurf/KiteServices";
import QuadServices from "../surf/SurfServices";
import WindFoilServices from "../windFoil/WindFoil";

export function Tab() {
  return (
    <Tabs defaultValue="kite" className=" bg-primaryColor py-10  ">
      <div className="text-center py-10 text-7xl font-medium text-secondaryColor">
        Plans & Pricing
      </div>
      <div className="mx-[32px] ">
        <TabsList className="grid max-w-[1000px]  mx-auto grid-cols-3 gap-3 border-b-2  bg-primaryColor">
          <TabsTrigger value="surf">Surf</TabsTrigger>
          <TabsTrigger value="kite">KiteSurf</TabsTrigger>
          <TabsTrigger value="wind">Wind foil</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="surf" className="">
        <QuadServices />
      </TabsContent>
      <TabsContent value="kite">
        <KiteServices />
      </TabsContent>
      <TabsContent value="wind">
        <WindFoilServices />
      </TabsContent>
    </Tabs>
  );
}
