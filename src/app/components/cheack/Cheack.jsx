"use client";
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap'
import HeadingSection from '@/app/utils/headingSection/HeadingSection'

const Cheack = () => {

  const { t } = useTranslation();

  return (
    <div>
        <Container>
            <div className="text-center">
                <HeadingSection 
                title={t('cheack.commitmentTitle')}
                text={t('cheack.commitmentText')}  
                
                />
                <img
                src="/images/66.png"
                alt="Success"
                className={`w-75 mt-2`}
                />
            </div>
        </Container>
    </div>
  )
}

export default Cheack
