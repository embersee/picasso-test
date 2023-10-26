import cn from "classnames";
import css from "./PostList.module.css";
import { FixedSizeList as List } from "react-window";
import { usePostsInfiniteQuery } from "@/entities/post/api/postApi";
import { increment, selectCurrentPage } from "@/entities/post/model/slice";
import { useAppDispatch } from "@/shared/model";
import { useAppSelector } from "@/shared/model/hooks";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import { PostCard } from "@/entities/post";

export function PostList() {
  const currentPage = useAppSelector(selectCurrentPage);
  const dispatch = useAppDispatch();

  const elementsPerPage = 10;
  const totalPosts = 110;

  const { data = [], isFetching } = usePostsInfiniteQuery({
    start: currentPage,
    limit: elementsPerPage,
  });

  if (data.length < 1) {
    return <div> no posts found!</div>;
  }

  const loadChunkOfData = (startIndex: number, stopIndex: number) => {
    if (totalPosts - elementsPerPage == stopIndex + 1) return;
    return new Promise<void>((res) => {
      dispatch(increment({ increment: elementsPerPage, total: totalPosts }));
      res();
    });
  };

  const isPostLoaded = (index: number) =>
    data.length < elementsPerPage || index < data.length;

  return (
    <div className={cn(css.root, isFetching && css.rootIsFetching)}>
      <InfiniteLoader
        isItemLoaded={isPostLoaded}
        loadMoreItems={loadChunkOfData}
        itemCount={totalPosts}
      >
        {({ onItemsRendered, ref }) => (
          <AutoSizer ref={ref}>
            {({ height, width }) => (
              <List
                height={height}
                width={width}
                itemCount={data.length}
                itemSize={100}
                onItemsRendered={onItemsRendered}
              >
                {({ index, style }) => {
                  const { id, title, body } = data[index];
                  return (
                    <PostCard
                      key={id}
                      style={style}
                      post={{
                        id,
                        title,
                        body,
                      }}
                    />
                  );
                }}
              </List>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </div>
  );
}
