import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselTransition() {
  return (
    <Carousel className="w-full sm:max-w-xl md:max-w-4xl">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <img
                  src={`image${index + 3}.jpeg`}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
