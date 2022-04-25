import React, { useEffect } from 'react';

import { useToDoStore } from '../../data/stores/useToDoStore';

import styles from './index.module.scss';

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  useEffect(() => {
    createTask('Hello World!');
  }, []);

  console.log(tasks);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>ToDo App</h1>
      <section className={styles.articleSection}></section>
      <section className={styles.articleSection}></section>
    </article>
  );
};
