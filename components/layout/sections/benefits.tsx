import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { icons } from 'lucide-react';

interface BenefitsProps {
    icon: string;
    title: string;
    description: string;
}

const benefitList: BenefitsProps[] = [
    {
        icon: 'Blocks',
        title: '온라인 판매자',
        description: '초보자부터 전문 판매자까지 쉽게 이용할 수 있는 도구와 서비스를 제공합니다.',
    },
    {
        icon: 'LineChart',
        title: '부업',
        description: '시간과 장소에 구애받지 않고 부업을 시작하고 성장할 수 있는 환경을 지원합니다.',
    },
    {
        icon: 'Wallet',
        title: '해외판로 준비',
        description: '글로벌 시장 진출을 위한 분석, 통관, 물류 서비스를 통해 해외 판매를 손쉽게 준비하세요.',
    },
    {
        icon: 'Sparkle',
        title: '유튜브·틱톡 판매',
        description: 'SNS 플랫폼과 연계된 판매 지원으로 콘텐츠를 통해 효과적으로 상품을 홍보하세요.',
    },
];

export const BenefitsSection = () => {
    return (
        <section id="benefits" className="container py-24 sm:py-32">
            <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
                <div>
                    <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">이런 분들에게 추천합니다!!</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        글로벌 시장 진출을 꿈꾸는 온라인 판매자, 부업을 통해 새로운 가능성을 찾고 싶은 분, 그리고 SNS를
                        활용해 판매를 극대화하고자 하는 분들을 위해 최적화된 솔루션을 제공합니다. 복잡한 과정은 저희가
                        간소화하고, 여러분은 비즈니스 성장에만 집중하세요.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-4 w-full">
                    {benefitList.map(({ icon, title, description }, index) => (
                        <Card
                            key={title}
                            className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
                        >
                            <CardHeader>
                                <div className="flex justify-between">
                                    <Icon
                                        name={icon as keyof typeof icons}
                                        size={32}
                                        color="hsl(var(--primary))"
                                        className="mb-6 text-primary"
                                    />
                                    <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                                        0{index + 1}
                                    </span>
                                </div>

                                <CardTitle>{title}</CardTitle>
                            </CardHeader>

                            <CardContent className="text-muted-foreground">{description}</CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
