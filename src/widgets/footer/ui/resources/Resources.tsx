import styles from './styles.module.scss';

export const Resources = () => {
  return (
    <div className={styles.resources}>
      <h4 className={styles.resources__title}>Ресурсы</h4>
      <a href="#">Часто задаваемые вопросы</a>
      <a href="#">Контакты</a>
      <a href="#">Стать спонсором</a>
      <a href="#">Политика конфиденциальности</a>
      <a href="#">Условия использования</a>
      <a href="#">Политика возврата</a>
    </div>
  );
};
