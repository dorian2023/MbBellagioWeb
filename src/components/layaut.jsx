// const Layaut = (props) => {
//   return (
//    <>
//     <section className="bg-accent">
//         {props.children}

//     </section>
//    </>
//   )
// }
// export default Layaut

import PropTypes from 'prop-types';

const Layaut = (props) => {
  const { children } = props;
  return (
   <>
    <section className="w-5/6 mx-auto px-8 pt-10">
        {children}
    </section>
   </>
  )
}

Layaut.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layaut;
