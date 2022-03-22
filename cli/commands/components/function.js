module.exports = (args) => {
  return `import styles from './${args.name}.module.css';

function ${args.name}() {
  return (
    <div className={styles.container}></div>
  );
}

export default ${args.name};
`;
}
