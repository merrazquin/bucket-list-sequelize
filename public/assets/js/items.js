$(function () {
  $('.accomplish-item').on('click', function (event) {
    var id = $(this).data('id')

    $.ajax('/api/items/' + id, {
      type: 'PUT',
      data: { accomplished: 1 }
    }).then(
      function () {
        location.reload()
      }
    )
  })

  $('.create-form').on('submit', function (event) {
    event.preventDefault()

    var milestoneId = $('option').filter(function () { return this.value == $('#milestone').val() }).data('value')

    var newItem = {
      item: $('#item').val().trim(),
      accomplished: 0,
      milestoneId: milestoneId == undefined ? null : milestoneId,
      milestone: milestoneId == undefined ? { name: $('#milestone').val() } : null
    }

    // Send the POST request.
    $.ajax('/api/items', {
      type: 'POST',
      data: newItem
    }).then(
      function () {
        location.reload()
      }
    )
  })
})
