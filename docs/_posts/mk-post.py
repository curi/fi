#!/usr/bin/env python3

from datetime import datetime
from prompt_toolkit import prompt
from prompt_toolkit.validation import Validator
from prompt_toolkit.completion import WordCompleter
import json
import inflection


def is_bool(v):
    return v.lower() in {'true', 'false'}

def is_yesno(v):
    return v.lower() in {'yes', 'no'}


yesno_validator = Validator.from_callable(
    is_yesno,
    error_message="Enter 'yes' or 'no'",
    move_cursor_to_end=True)


def yesno_to_bool(v: str):
    return v.lower() in {'yes', 'y', 'true'}


d = datetime.now()
ic = d.isocalendar()
iso_format = d.isoformat().split('T')
iso_date = iso_format[0]
iso_time = ':'.join(iso_format[1].split(':')[0:2])

title = prompt("Title of the post: ")
cats_ = prompt("Catagories, space separated (or empty): ")
cats = f"categories: {json.dumps(cats_)}" if len(cats_) > 0 else ""


frontmatter = f"""---
title: {json.dumps(title)}
layout: post
date: {iso_date} {iso_time}
parent: Posts
{cats}
---
"""

import os
from pathlib import Path

p = Path(__file__)
new_lr_file = p.parent / f"{iso_date}-{inflection.parameterize(title, separator='-')}.md"

if os.path.exists(new_lr_file):
    raise Exception(f"Planned to create {new_lr_file} but a file already exists there!")

with open(new_lr_file, "w") as f:
    f.write(frontmatter)

print(f"""Wrote the below frontmatter to {new_lr_file}

{frontmatter}

You can now edit {new_lr_file} as required.
""")

start_vscode = yesno_to_bool(prompt(f"Run `code {new_lr_file}`? (yes/no) > ", validator=yesno_validator, completer=WordCompleter({'yes', 'no'})).lower())
if start_vscode:
    os.system(f"code {new_lr_file}")