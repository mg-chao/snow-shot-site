import { useEffect } from 'react';

export function useTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    
    // 清理函数，在组件卸载时恢复原标题
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
} 