import { DragItem } from "../state/DragItem";
import { useAppState } from "../state/AppStateContext";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useEffect } from "react";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();

  const [, drag, preview] = useDrag({
    item,
    begin: () =>
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: item,
      }),
    end: () =>
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: undefined,
      }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: false });
  }, [preview]);

  return { drag };
};
