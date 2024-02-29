"use client";

import { COLOR_EXTENSION_MAP } from "@/constant";
import { FileType } from "@/typings";
import { ColumnDef } from "@tanstack/react-table";
import prettyBytes from "pretty-bytes";
import { FileIcon, defaultStyles } from "react-file-icon";

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];
      // if file has no preset color, use default
      const fileColor = !COLOR_EXTENSION_MAP[extension]
        ? COLOR_EXTENSION_MAP["default"]
        : COLOR_EXTENSION_MAP[extension];

      // console.log("file: ", type, ", color: ", fileColor);
      // img/jpeg
      return (
        <div className="w-10">
          <FileIcon
            extension={extension}
            // labelColor={COLOR_EXTENSION_MAP[extension]}
            labelColor={fileColor}
            // @ts-ignore
            {...defaultStyles[extension]}
          ></FileIcon>
        </div>
      );
    },
  },
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue, ...props }) => (
      <a
        href={renderValue() as string}
        target="_blank"
        className="underline text-blue-500 hover:text-blue-600"
      >
        Download
      </a>
    ),
  },
];
