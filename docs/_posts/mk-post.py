#!/usr/bin/env python3

from datetime import datetime

d = datetime.now()
ic = d.isocalendar()
iso_format = d.isoformat().split('T')
iso_date = iso_format[0]
iso_time = ':'.join(iso_format[1].split(':')[0:2])

raise Exception('todo title')

frontmatter = f"""---
title: " __TITLE__ "
layout: post
date: {iso_date} {iso_time}
parent: Learning Reports
category: Learning Reports
---
"""

import os
from pathlib import Path

p = Path(__file__)
new_lr_file = p.parent / f"{iso_date}-{todo_title}.md"

if os.path.exists(new_lr_file):
    raise Exception(f"Planned to create {new_lr_file} but a file already exists there!")

with open(new_lr_file, "w") as f:
    f.write(frontmatter)

print(f"""Wrote the below frontmatter to {new_lr_file}

{frontmatter}

You can now edit {new_lr_file} as required.
""")
