import { useState, useEffect, useRef } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { TanstackTable, SortableColumnHeader } from '@nwsconnect/atmosphere';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-660a04e2d9/icons';