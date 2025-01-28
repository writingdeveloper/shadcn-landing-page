'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
    const { theme } = useTheme();
    return (
        <section className="container w-full">
            <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
                <div className="text-center space-y-8">
                    <Badge variant="outline" className="text-sm py-2">
                        <span className="mr-2 text-primary">
                            <Badge>New</Badge>
                        </span>
                        <span> 아이템박스 서비스 런칭! </span>
                    </Badge>

                    <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
                        <h1>
                            Experience the
                            <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                                ITEMBOX
                            </span>
                            platform
                        </h1>
                    </div>

                    <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
                        {`아이템박스는 물류와 AI를 결합해 소비자들에게 다양한 상품과 편리한 서비스를 제공합니다. 지금 가입하고 더 많은 혜택을 누리세요!
`}
                    </p>

                    <div className="space-y-4 md:space-y-0 md:space-x-4">
                        <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                            지금 시작하기
                            <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                        </Button>

                        <Button asChild variant="secondary" className="w-5/6 md:w-1/4 font-bold">
                            <Link href="https://demo.itembox.ai" target="_blank">
                                데모 페이지
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="relative group mt-14">
                    <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
                    <Image
                        width={1200}
                        height={1200}
                        className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
                        src={theme === 'light' ? '/hero-image-light.jpeg' : '/hero-image-dark.jpeg'}
                        alt="dashboard"
                    />

                    <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
                </div>
            </div>
        </section>
    );
};
