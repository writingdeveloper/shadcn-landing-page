import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { icons } from 'lucide-react';

interface FeaturesProps {
    icon: string;
    title: string;
    description: string;
}

const featureList: FeaturesProps[] = [
    {
        icon: 'TabletSmartphone',
        title: '상품소싱',
        description: 'AI 기술을 활용하여 전 세계에서 최적의 상품을 빠르게 소싱할 수 있습니다.',
    },
    {
        icon: 'BadgeCheck',
        title: 'AI 에디터',
        description: '자동화된 AI 도구로 상품 정보를 쉽게 편집하고, 판매에 적합한 콘텐츠를 생성하세요.',
    },
    {
        icon: 'Goal',
        title: '마켓연동',
        description: '여러 전자상거래 플랫폼과의 통합을 통해 한 곳에서 모든 마켓을 관리하세요.',
    },
    {
        icon: 'PictureInPicture',
        title: '구매·생산·검품',
        description: '효율적인 프로세스를 통해 상품 구매부터 생산, 품질 검사까지 체계적으로 지원합니다.',
    },
    {
        icon: 'MousePointerClick',
        title: '통관·운송',
        description: '복잡한 통관 절차와 국제 운송을 간소화하여 빠르고 안전하게 상품을 배송합니다.',
    },
    {
        icon: 'Newspaper',
        title: '해외판매',
        description: '글로벌 시장 진출을 위한 최적의 솔루션을 제공하여 해외 판매를 손쉽게 시작하세요.',
    },
];

export const FeaturesSection = () => {
    return (
        <section id="features" className="container py-24 sm:py-32">
            <h2 className="text-lg text-primary text-center mb-2 tracking-wider">주요 기능</h2>

            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">비즈니스를 혁신하는 통합 솔루션</h2>

            <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
                AI와 물류를 결합한 차세대 플랫폼으로, 상품 소싱부터 해외 판매까지 모든 단계를 한곳에서 관리할 수
                있습니다. 글로벌 시장에서 성공을 위한 최적의 파트너가 되어드립니다.
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featureList.map(({ icon, title, description }) => (
                    <div key={title}>
                        <Card className="h-full bg-background border-0 shadow-none">
                            <CardHeader className="flex justify-center items-center">
                                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                                    <Icon
                                        name={icon as keyof typeof icons}
                                        size={24}
                                        color="hsl(var(--primary))"
                                        className="text-primary"
                                    />
                                </div>

                                <CardTitle>{title}</CardTitle>
                            </CardHeader>

                            <CardContent className="text-muted-foreground text-center">{description}</CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};
