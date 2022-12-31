import React from 'react';
import Typography from '../../components/Typography/Typography';
import TypographyVariantsTypes from '../../components/Typography/TypographyVariants.types';
import ColorsVariantsTypes from '../../assets/colors/ColorsVariants.types';
import Button from '../../components/Button/Button';
import './IntroSection.scss';

function IntroSection() {
  return (
    <div className="intro-section-wrapper">
      <div className="intro-section__text">
        <Typography className="intro-section__text-subtitle" color={ColorsVariantsTypes.Gray}>
          Digital агентство — itClan
        </Typography>
        <div className="intro-section__text-title">
          <Typography variant={TypographyVariantsTypes.Heading}>Создадим сайт</Typography>
          <Typography variant={TypographyVariantsTypes.Heading}>под ваши бизнес задачи</Typography>
        </div>
        <Typography className="intro-section__text-description" color={ColorsVariantsTypes.Gray}>
          Разработаем для вас фирменный стиль, а также продающийся сайт и
          социальные сети. Продвигаем ваш бизнес на новый уровень
        </Typography>
      </div>
      <Button>Заказать звонок</Button>
    </div>
  );
}

export default IntroSection;
