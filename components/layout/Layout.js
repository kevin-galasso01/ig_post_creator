import Title from './Title';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <div>
      <Title />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;