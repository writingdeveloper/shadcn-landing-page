import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

enum ProService {
    YES = 1,
    NO = 0,
}
interface ServiceProps {
    title: string;
    pro: ProService;
    description: string;
}
const serviceList: ServiceProps[] = [
    {
        title: 'Taobao',
        description:
            '중국 최대의 온라인 쇼핑 플랫폼으로 다양한 상품을 저렴한 가격에 제공하며, 소규모 비즈니스부터 대형 판매자까지 모두를 지원합니다.',
        pro: 0,
    },
    {
        title: '1688',
        description:
            '중국의 대표적인 B2B 플랫폼으로, 대량 구매 및 공장 직거래를 통해 경쟁력 있는 가격으로 상품을 소싱할 수 있습니다.',
        pro: 0,
    },
    {
        title: 'AliExpress',
        description:
            '전 세계 소매 고객을 대상으로 한 글로벌 쇼핑몰로, 다양한 카테고리의 상품을 제공하며 국제 배송을 지원합니다.',
        pro: 0,
    },
    {
        title: 'Amazon',
        description:
            '글로벌 최대 전자상거래 플랫폼으로, 뛰어난 물류 네트워크와 전 세계 소비자에게 접근할 수 있는 기회를 제공합니다.',
        pro: 0,
    },
];

export const ServicesSection = () => {
    return (
        <section id="services" className="container py-24 sm:py-32">
            <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Services</h2>

            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">오픈마켓</h2>
            <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
                저희는 현재 여러 글로벌 오픈마켓을 지원하며, 고객의 비즈니스 성장을 돕기 위해 지속적으로 더 많은
                플랫폼과의 연동을 확장하고 있습니다. 간편하고 효율적인 솔루션을 통해 다양한 시장에서 성공적인 판매를
                경험하세요.
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
                {serviceList.map(({ title, description, pro }) => (
                    <Card key={title} className="bg-muted/60 dark:bg-card h-full relative">
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </CardHeader>
                        <Badge
                            data-pro={ProService.YES === pro}
                            variant="secondary"
                            className="absolute -top-2 -right-3 data-[pro=false]:hidden"
                        >
                            PRO
                        </Badge>
                    </Card>
                ))}
            </div>
        </section>
    );
};
