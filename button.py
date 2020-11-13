#is-primary, is-danger, is-white, is-black
html = """ """

rows = range(7)
rows = [str(i) for i in rows]
cols = range(7)
cols = [str(i) for i in cols]
for row in rows:
    html +=  """<div class="buttons">\n"""
    for col in cols:
        html += """    <button id=\"""" + row + "_" + col + \
            """\" class = "button is-ghost is-small" > </button >\n"""
    html += """</div>\n"""
file = open('buttons.html', 'w')
file.write(html)
ids = []
for row in rows:
    for col in cols:
        ids.append(row + "_" + col)
print(ids)