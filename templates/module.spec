@objects
  <%= modulename %>                .<%= modulename %>
  maincontent           body > .container
  header                header
  footer                footer


= Main section =

  @on all
    <%= modulename %>:
        height 40px

  @on lg
    <%= modulename %>:
        height 30px

  @on xs, sm
    <%= modulename %>:
        height 20px


